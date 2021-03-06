import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import EventBus from "./EventBus";
import store from "./store/index.js";
import { install } from "./plugins/plugin";
import ApiService from "./core/api";
import router from "./router";

ApiService.init();

Vue.use(install);

Vue.config.productionTip = false;

new Vue({
  EventBus,
  store,
  vuetify,
  router,
  render: h => h(App)
}).$mount("#app");
