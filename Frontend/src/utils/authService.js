import axios from 'axios';
import { formatAPIURL } from './stringUtils';

import Cookies from 'js-cookie';
// import loggerInstance from './logger';
// import standard  from './formatter';

// const logger = loggerInstance([standard]);


export function getUserName() {
  let userInfo = Cookies.get('userInfoVue');
  if (typeof userInfo !== 'undefined') {
    if (typeof userInfo === 'string') {
      userInfo = JSON.parse(userInfo);
    }

    if (userInfo.userName) {
      return userInfo.userName;
    }
    window.open('/', '_self');
  }
  return null;
}

export function getUserRoles() {
  let userInfo = Cookies.get('userInfoVue');
  if (typeof userInfo !== 'undefined') {
    if (typeof userInfo === 'string') {
      userInfo = JSON.parse(userInfo);
    }

    if (userInfo.roles) {
      return userInfo.roles;
    }
  }
  return [];
}

export function getEntitledAppFeatures() {
  let userInfo = Cookies.get('userInfoVue');
  if (typeof userInfo !== 'undefined') {
    if (typeof userInfo === 'string') {
      userInfo = JSON.parse(userInfo);
    }

    if (userInfo.features) {
      return userInfo.features;
    }
  }
  return [];
}

export function isLoggedIn() {
  return Cookies.get('loggedIn');
}

export async function removeCookie() {
  const res = await axios.get(formatAPIURL('/auth/logout'), {
    withCredentials: true,
  });

  if (res.status !== 200) {
    logger.error('Unable to remove user cookies.');
  }
}

export async function removeCookies() {
  Cookies.remove('loggedIn', { path: '' });
  Cookies.remove('userInfoVue', { path: '' });
  await removeMpCookie();
}


export async function setupCookie(token) {
  const res = await axios.get(formatAPIURL('/auth/account/ping'), {
    headers: {
      Authorization: `Bearer${ token}`,
    },
    withCredentials: true,
  });

  if (res.status !== 200) {
    logger.error('Unable to fetch cookie from server.');
  }
}
