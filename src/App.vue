<template>
  <v-app>
    <v-content class="grey lighten-3">
      <!--<Navigation />-->
      <Settings />
      <Drawer />
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  components: {
    Navigation: () => import("@/components/Navigation"),
    Drawer: () => import("@/components/Drawer"),
    Settings: () => import("@/components/Settings")
  }
};
</script>
