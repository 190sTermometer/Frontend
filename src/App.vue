<template>
  <v-app>
    <AppBar />
    <Drawer />

    <v-content class="grey darken-3">
      <v-container fluid>
        <v-fade-transition mode="out-in">
          <router-view />
        </v-fade-transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Drawer from "@/components/Drawer";
import AppBar from "@/components/AppBar";

export default {
  name: "App",
  components: {
    Drawer,
    AppBar
  },
  mounted() {
    console.log("hdd");
    console.log(this.$store.commit("checkLoggedIn"));
  }
};
</script>
