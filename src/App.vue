<template>
  <v-app>
    <v-content>
      <Navigation />
      <!-- <Drawer /> -->
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  components: {
    Navigation: () => import("@/components/Navigation")
    // Drawer: () => import("@/components/Drawer")
  }
};
</script>
