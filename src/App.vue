<template>
  <v-app>
    <AppBar />

    <v-content :class="mode">
      <v-container fluid>
        <v-fade-transition mode="out-in">
          <router-view />
        </v-fade-transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import AppBar from "@/components/AppBar";

export default {
  name: "App",
  components: {
    AppBar
  },
  mounted() {},
  computed: {
    mode() {
      return this.$store.getters.mode;
    }
  }
};
</script>
