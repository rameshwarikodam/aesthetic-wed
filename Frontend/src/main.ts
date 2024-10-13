import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
// @ts-ignore
import store from './store/index';
// @ts-ignore
import { setupCookie } from './utils/authService';
// @ts-ignore
import Auth from './mixins/auth';
import vueScrollto from 'vue-scrollto';
import axios from 'axios';
// @ts-ignore
import RDS from '@aherrahul/design-system';
import '@aherrahul/design-system/dist/style.css';
import mitt from 'mitt';

// Create the Vue app instance
const app = createApp(App);

// Use router, store, and other plugins
app.use(router);
app.use(store);
app.use(RDS);
app.use(vueScrollto, { offset: -120 });
app.mixin(Auth);

// Create an event bus using mitt
const EventBus = mitt();
app.config.globalProperties.$eventBus = EventBus; // Set event bus globally


// Axios response interceptor for handling authentication and token setup
axios.interceptors.response.use((response) => {
    // After successful verification, set MP cookie for seamless login
    if (response.config.url?.includes('/api/verify') && Object.prototype.hasOwnProperty.call(response.data, 'token')) {
        setupCookie(response.data.token);
    }
    return response;
}, (error) => {
    const res = error.response;
    if (res && res.status === 401) {
        const isSessionExpired = store.state.loginModule.isAuthenticated;
        if (!(isSessionExpired || res.config.url.includes('/api/verify'))) {
            store.dispatch('loginModule/signOut');
            router.push('/login');
            // EventBus.$emit('layoutChange', LoginLayout);
        }
    }
    return Promise.reject(error);
});

console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV !== 'development') {
  console.warn = () => {};
  console.log = () => {};
}

// Mount the app
app.mount('#app');
