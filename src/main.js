import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store/store.js";

import vuetify from "./plugins/vuetify";
import wait from "./plugins/wait";

Vue.config.productionTip = false;

router.afterEach((to, from) => {
  store.state.title = to.params.name || to.name;
});

new Vue({
  router,
  store,
  vuetify,
  wait,
  render: h => h(App)
}).$mount("#app");
