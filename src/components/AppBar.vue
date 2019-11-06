<template>
  <div>
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
      app
      src="https://images.template.net/wp-content/uploads/2017/01/14180026/Web-Background-Pattern.jpg"
      clipped
      :color="theme"
      dark
      floating
      stateless
      v-model="drawer"
    >
      <template v-slot:img="attrs">
        <v-img
          v-if="mode==modes[0] "
          v-bind="attrs"
          gradient="to top, rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)"
        />
        <v-img v-else v-bind="attrs" gradient="to top, rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)" />
      </template>

      <v-divider class="mx-3 mb-3" />

      <v-list nav>
        <v-list-item v-for="(link, i) in links" :key="i" :to="link.path" :active-class="theme">
          <v-list-item-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-action>

          <v-list-item-title v-text="link.view" />
        </v-list-item>

        <v-list-group :color="theme" prepend-icon="settings">
          <template v-slot:activator>
            <v-list-item-title>Enheter</v-list-item-title>
          </template>

          <v-list-item
            v-for="i in devices"
            :key="i.name"
            :active-class="theme"
            link
            @click="changeParams(i.name)"
          >
            <v-list-item-title>{{getName(i.name)}}</v-list-item-title>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
  </div>
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
    fav: true,
    menu: false,
    message: false,
    hints: true,
    Path: "",
    drawer: true
  }),
  mounted() {
    this.$wait.start("home");
    this.$store.dispatch("getKnownDevices").then(() => {
      this.$wait.end("home");
    });

    console.log("Omladdad");
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
      console.log(this.$store.getters.knownDevices);
      return this.$store.getters.knownDevices;
    },
    color() {
      return this.$store.getters.color;
    },
    mode() {
      return this.$store.getters.mode;
    },
    links() {
      return paths.filter(
        i =>
          i.visible &&
          (i.login == !!this.$store.state.username || i.login == null)
      );
    },
    ...mapGetters([
      "theme",
      "colors",
      "userDetails",
      "isLoggedIn",
      "authStatus",
      "mode",
      "modes",
      "olle"
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
    forceUppdatering() {
      this.$forceUpdate();
      console.log("adaassa");
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