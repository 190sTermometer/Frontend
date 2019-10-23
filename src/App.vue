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
    this.$store.dispatch("checkLoggedIn").then(out => {
      console.log(out);
      console.log(this.$store.state.userDetails);
    });
  }
};
</script>
