import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import EventBus from "./EventBus";
import store from "./store/index.js";

Vue.config.productionTip = false;

new Vue({
  EventBus,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
