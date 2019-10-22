<template>
  <div>
    <v-app-bar
      absolute
      dark
      scroll-target="#playground-example"
      :color="theme"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>

  </div>
</template>

<script>
import { Chrome } from "vue-color";
import { mapGetters, mapMutations } from "vuex";
import Settings from "./Settings"

export default {
  data: () => ({
    color: "accent",
    colors: ["primary", "accent", "warning lighten-2", "teal", "orange"]
  }),
  computed: {
    color() {
      return this.$store.getters.color;
    },
    ...mapGetters(["theme", "colors"])
  },
  methods: {
    ...mapMutations(["setTheme"]),
    changeParams(param) {
      this.$router.push({ name: "Info", params: { name: param } });
    }
  }
};

</script>
