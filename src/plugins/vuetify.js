import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

import "material-design-icons-iconfont/dist/material-design-icons.css";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#7047ec",
        secondary: "#4caf50",
        tertiary: "#495057",
        accent: "#82B1FF",
        error: "#f55a4e",
        info: "#00d3ee",
        success: "#5cb860",
        warning: "#ffa21a"
      }
    }
  },
  icons: {
    iconfont: "md"
  }
});
