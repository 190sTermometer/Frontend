<template>
  <v-container>
    <v-app-bar app fixed clipped-left dark :color="theme">
      <v-app-bar-nav-icon @click="toggleDrawer()" />

      <v-toolbar-title to="/">
        <router-link to="/" class="toolbar-title">Olles Väder</router-link>
      </v-toolbar-title>

      <v-spacer />

      <Search />

      <v-spacer />

      <Settings />
      <ProfileSettings />
    </v-app-bar>
    <v-navigation-drawer
      id="app-drawer"
      src="https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-2.32103624.jpg"
      app
      clipped
      :color="mode"
      dark
      floating
      stateless
      v-model="drawer"
    >
      <template v-slot:img="attrs">
        <v-img v-bind="attrs" gradient="to top, rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)" />
      </template>

      <v-divider class="mx-3 mb-3" />

      <v-list nav>
        <v-list-item v-for="(link, i) in links" :key="i" :to="link.path" :active-class="theme">
          <v-list-item-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-action>

          <v-list-item-title v-text="link.view" />
        </v-list-item>

        <v-list-group prepend-icon="settings" :color="theme">
          <template v-slot:activator>
            <v-list-item-title>Enheter</v-list-item-title>
          </template>

          <v-list-item v-for="i in devices" :key="i.Name" link @click="changeParams(i.Name)">
            <v-list-item-title>{{getName(i.Name)}}</v-list-item-title>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import Settings from "./material/Settings";
import ProfileSettings from "./material/ProfileSettings";

import router from "@/router";
import paths from "@/router/paths";
import { Chrome } from "vue-color";

import Search from "./material/Search";

export default {
  data: () => ({
    hover: false,
    links: [],
    fav: true,
    menu: false,
    message: false,
    hints: true,
    Path: "",
    drawer: true
  }),
  mounted() {
    this.links = paths.filter(i => i.visible == true);

    this.$wait.start("home");
    this.$store.dispatch("getKnownDevices").then(() => {
      this.$wait.end("home");
    });
  },
  components: { Settings, ProfileSettings, Search },
  computed: {
    cardStyle() {
      return {
        transform: `scale(${this.hover ? 1.1 : 1})`,
        transition: "all 0.2s ease"
      };
    },
    devices() {
      return this.$store.getters.knownDevices;
    },
    color() {
      return this.$store.getters.color;
    },
    mode() {
      return this.$store.getters.mode;
    },
    ...mapGetters([
      "theme",
      "colors",
      "userDetails",
      "isLoggedIn",
      "authStatus",
      "mode",
      "modes"
    ])
  },
  methods: {
    changeParams(param) {
      this.$router.push({ name: "Info", params: { name: param } });
    },
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
    getName(name) {
      return name.split("_").join(" ");
    },
    changeParams(param) {
      this.$router.push({ name: "Info", params: { name: param } });
    },
    ...mapMutations(["setTheme"])
  }
};
</script>

<style scoped>
.toolbar-title {
  color: inherit;
  text-decoration: inherit;
}
</style>