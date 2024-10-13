const mutations = {
  setRememberMeToggle(state) {
    state.rememberMe = !state.rememberMe;
  },
  setSignInSuccess(state) {
    state.isAuthenticated = true;
  },
  setSignInFailure(state) {
    state.isAuthenticated = false;
    state.accessToken = '';
  },
  setUserName(state, payload) {
    state.userName = payload;
  },
  setPassword(state, payload) {
    state.password = payload;
  },
  setSubmitting(state, payload) {
    state.submitting = payload;
  },
  setLoginError(state, payload) {
    state.loginError = payload;
  },
  updateAccessToken(state, payload) {
    state.accessToken = payload;
  },
  setRouterChange(state, payload) {
    state.routerLocation = payload;
  },
  setUserSettings(state, payload) {
    sessionStorage.setItem('userSettings', JSON.stringify(payload));
    state.userSettings = payload;
  },
};

export default mutations;
