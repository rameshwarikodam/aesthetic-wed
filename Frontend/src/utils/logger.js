import { format } from 'logform';
import { MESSAGE } from 'triple-beam';
import dropRight from 'lodash/dropRight';
import isError from 'lodash/isError';
import last from 'lodash/last';
import { standard, simple } from './formatter';

const LEVELS = {
  debug: 1,
  info: 2,
  warn: 3,
  error: 4,
  fatal: 5,
};

const transform = (format, level, message, meta) => {
  let splat = meta;
  let exception;
  if (isError(last(meta))) {
    splat = dropRight(meta);
    exception = last(meta);
  }

  return format.transform({
    level,
    message,
    splat,
    exception,
  });
};

export const consoleLogger = (logFormat = simple, { logLevel = 'debug' }) => {
  const combinedFormat = format.combine(
    standard,
    logFormat,
  );

  const log = (level, message, ...meta) => {
    if (console && LEVELS[level] >= LEVELS[logLevel]) {
      const logMessage = transform(combinedFormat, level, message, meta)[MESSAGE];

      // eslint-disable-next-line no-console
      if (console[level]) {
        // eslint-disable-next-line no-console
        console[level](logMessage);
      } else {
        // eslint-disable-next-line no-console
        console.log(logMessage);
      }
    }
  };

  return {
    debug(...params) {
      log.apply(this, ['debug', ...params]);
    },

    info(...params) {
      log.apply(this, ['info', ...params]);
    },

    warn(...params) {
      log.apply(this, ['warn', ...params]);
    },

    error(...params) {
      log.apply(this, ['error', ...params]);
    },

    fatal(...params) {
      log.apply(this, ['fatal', ...params]);
    },
  };
};

export const noopLogger = () => ({
  debug() {},

  info() {},

  warn() {},

  error() {},

  fatal() {},
});

module.exports = formats => consoleLogger(formatter(formats), { logLevel });
