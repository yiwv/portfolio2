import { createApp } from "vue";
import App from "./App.vue";
import VueRouter from "./router/index";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/import.css";

import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import PrimeVue from 'primevue/config';

import VueAOS from '@dcasia/vue-aos';
import '@dcasia/vue-aos/dist/vue-aos.css';

import VueSmoothScroll from 'vue3-smooth-scroll';

// drawer
import "./assets/jquery/drawer/drawer.css";

// slick
import "./assets/jquery/slick/slick-theme.css";
import "./assets/jquery/slick/slick.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

// Initialize Firebase
initializeApp(firebaseConfig);
createApp(App)
  .use(VueRouter)
  .use(PrimeVue)
  .use(VueAOS)
  .use(VueSmoothScroll)
  .mount("#app");
