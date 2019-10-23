<template>
  <v-app-bar app fixed clipped-left dark :color="theme">
    <v-app-bar-nav-icon @click="toggleDrawer()" />

    <v-toolbar-title>Olles Väder</v-toolbar-title>

    <v-spacer />

    <Search />

    <v-spacer />

    <Settings />
    <ProfileSettings />
  </v-app-bar>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import Settings from "./material/Settings";
import ProfileSettings from "./material/ProfileSettings";

import Search from "./material/Search";

export default {
  data: () => ({}),
  components: { Settings, ProfileSettings, Search },
  computed: {
    ...mapGetters(["theme", "colors", "color"])
  },
  methods: {
    ...mapMutations(["setTheme"]),
    changeParams(param) {
      this.$router.push({ name: "Info", params: { name: param } });
    },
    toggleDrawer() {
      this.$store.commit("setDrawer", !this.$store.state.drawer);
    }
  }
};
</script>
