import Vue from "vue";
import App from "./App.vue";
import { router } from "./router";
import store from "./store";
import Vuelidate from "vuelidate";
import axios from "axios";
import VueSplash from 'vue-splash';

axios.defaults.baseURL = "http://37.75.13.158/v1";

Vue.use(Vuelidate);
Vue.use(VueSplash);


new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
  store,
});
