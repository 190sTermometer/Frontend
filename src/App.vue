<template>
  <v-app>
    <Drawer />
    <Settings />

    <v-content class="grey lighten-3">
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
    AppBar: () => import("@/components/AppBar"),
    Navigation: () => import("@/components/Navigation"),
    Drawer: () => import("@/components/Drawer"),
    Settings: () => import("@/components/Settings"),
    CoreView: () => import("@/components/View")
  }
};
</script>
