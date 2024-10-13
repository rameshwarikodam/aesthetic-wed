import { createApp } from 'vue'; // This is how Vue 3 is imported
import { createStore } from 'vuex'; // Vuex store import in Vue 3

import loginModule from './modules/login';

const store = createStore({
  state: {
    appVersion: '0.0.0',
  },
  modules: {
    loginModule,
  },
  mutations: {},
  actions: {
    dispatchAction({ dispatch }, payload) {
      if (typeof payload === 'string') {
        return dispatch(getAction(payload));
      }
      const { actionName } = payload;
      if (!actionName) {
        throw new Error(
          'dispatchAction payload must have an actionName property',
        );
      }
      const newPayload = JSON.parse(JSON.stringify(payload.data));
      return dispatch(getAction(actionName), newPayload);
    },
  },
  getters: {
    appVersion: state => state.appVersion,
  },
});

const app = createApp({});
app.use(store);
app.mount('#app');

// Add this line at the end
export default store;

