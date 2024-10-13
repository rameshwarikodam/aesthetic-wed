const state = {
  userName: '',
  password: '',
  rememberMe: false,
  submitting: false, // logginIn
  isAuthenticated: false,
  loginError: null,
  alertShown: false,
  accessToken: '',
  idleTimeout: false,
  userSettings: {},
};
export default state;
