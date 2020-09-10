import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import vuetify from "./plugins/vuetify";
import EventBus from "./EventBus";

Vue.config.productionTip = false;

new Vue({
  EventBus,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
