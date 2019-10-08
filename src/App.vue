<template>
  <v-app>
    <v-content>
      <Navigation />
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
  export default {
    components: {
      Navigation: () => import("@/components/Navigation"),
    }
  };
</script>
