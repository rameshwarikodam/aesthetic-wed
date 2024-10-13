import { format } from 'logform';
import { MESSAGE } from 'triple-beam';
import map from 'lodash/map';
import mapKeys from 'lodash/mapKeys';
import mapValues from 'lodash/mapValues';
import omit from 'lodash/omit';
import replace from 'lodash/replace';
import snakeCase from 'lodash/snakeCase';

// Standard format
export const standard = format.combine(
  format.timestamp(),
  format.splat(),
);

// Morningstar format
export const morningstar = format((info, opts) => {
  const { serviceName, env, trace } = opts;

  const {
    level, message, exception,
  } = info;

  const severities = {
    debug: 'debug',
    info: 'low',
    warn: 'medium',
    error: 'high',
    fatal: 'fatal',
  };

  const logAttrs = {
    serviceName,
    env,
    eventSeverity: severities[level],
    eventDescription: message,
    ...omit(info, 'timestamp', 'level', 'message', 'splat', 'exception'),
  };

  if (exception) {
    Object.assign(logAttrs, { exceptionMessage: exception.message });
    if (trace) {
      Object.assign(logAttrs, { exceptionStackTrace: exception.stack });
    }
  }

  const normalizedAttrs = mapValues(
    mapKeys(logAttrs, (v, k) => snakeCase(k)),
    (v) => {
      const singleLine = replace(v, /\n/g, ' ');
      return replace(singleLine, /"/g, '\'');
    },
  );

  const attrMessage = map(normalizedAttrs, (v, k) => `${k}="${v}"`).join(' ');
  info[MESSAGE] = `${info.timestamp} ${attrMessage}`;
  return info;
});

// Request format
export const request = format((info, opts) => {
  const { request } = opts;
  if (request) {
    info.requestId = request.headers['x-api-requestid'];
    info.requestMethod = request.method;
    info.requestURL = request.originalUrl;
    info.clientIP = request.headers['x-forwarded-for'] || request.connection.remoteAddress;
    info.userName = request.headers['x-user-name'];
    info.companyName = request.headers['x-company-name'];
  }

  return info;
});

// Simple format
export const simple = format((info, opts) => {
  const { trace } = opts;

  const {
    level, message, exception,
  } = info;

  let exceptionMessage = '';
  if (exception) {
    if (trace) {
      exceptionMessage = `\n${exception.stack}`.replace(/\n/g, '\n\t');
    } else {
      exceptionMessage = `(${exception.message})`;
    }
  }

  info[MESSAGE] = `${info.timestamp} ${level.toUpperCase()}: ${message} ${exceptionMessage}`;
  return info;
});

// Tag format
export const tag = format((info, opts) => {
  Object.assign(info, opts);
  return info;
});
