import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store/store.js";

import vuetify from "./plugins/vuetify";
import wait from "./plugins/wait";

import VuetifyToast from "vuetify-toast-snackbar";

Vue.use(VuetifyToast, {
  x: "center",
  y: "bottom",
  color: "green",
  icon: "info",
  iconColor: "",
  classes: ["body-2"],
  timeout: 3000,
  dismissable: true,
  multiLine: false,
  vertical: false,
  queueable: true,
  showClose: true,
  closeText: "",
  closeIcon: "close",
  closeColor: "",
  slot: [],
  shorts: {
    custom: {
      color: "purple"
    }
  },
  property: "$toast"
});

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
