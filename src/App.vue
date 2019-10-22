<template>
  <v-app>
    <Drawer />
    <Settings />

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
export default {
  components: {
    Drawer: () => import("@/components/Drawer"),
    Settings: () => import("@/components/Settings")
  }
};
</script>
