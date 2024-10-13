import axios from 'axios';
import Cookies from 'js-cookie';
import { getCookieDate } from '../../../utils/dateUtils.js';
import { removeCookies } from '../../../utils/authService.js';

const actions = () => ({
  toggleRememberMe: {
    handler({ commit }) {
      commit('setRememberMeToggle');
    },
  },
  signInSuccess: {
    handler({ commit }) {
      commit('setSignInSuccess');
    },
  },
  signInFailure: {
    handler({ commit }) {
      commit('setSignInFailure');
    },
  },
  removeError: {
    handler({ commit }) {
      commit('setLoginError', null);
    },
  },
  userNameEntered: {
    handler({ commit }, payload) {
      commit('setUserName', payload);
    },
  },
  passwordEntered: {
    handler({ commit }, payload) {
      commit('setPassword', payload);
    },
  },
  doLogin: {
    handler({ commit, dispatch }, payload) {
      commit('setSubmitting', true);
      const basicAuth = `Basic ${btoa(`${payload.userName}:${payload.password}`)}`;
      const headers = {
        'Content-Type': 'application/json',
        Authorization: basicAuth,
        Accept: 'application/json, text/plain, */*',
      };

      return axios.get('/api/verify', {
        baseURL: '/',
        headers,
      })
        .then((response) => {
          dispatch('signInSuccess');
          commit('setSubmitting', false);
          commit('updateAccessToken', response.data.token);
          commit('setLoginError', '');
          commit('setUserSettings', response.data.userSettings);
          Cookies.set('loggedIn', true, { expires: getCookieDate() });
          Cookies.set('userInfoVue', response.data.userInfo, { expires: getCookieDate() });
        })
        .catch((error) => {
          dispatch('signInFailure');
          commit('setSubmitting', false);
          commit('setLoginError', 'The login information you have provided is incorrect.');
        });
    },
  },
  signOut: {
    handler({ commit }) {
      removeCookies();
      commit('setSignInFailure');
    },
  },
  routerChanged({ commit }, payload) {
    commit('setRouterChange', payload);
  },
});

export default actions;
