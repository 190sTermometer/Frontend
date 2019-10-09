<template>
  <v-app-bar id="core-app-bar" absolute app color="transparent" flat dense height="88">
    <v-toolbar-title class="font-weight-light">{{ title }}</v-toolbar-title>

    <v-spacer />

    <v-toolbar-items>
      <v-row align="center" class="mx-0">
        <v-text-field class="mr-4 purple-input" color="purple" label="Search..." hide-details />

        <v-btn icon>
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </v-row>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
// Utilities
import { mapMutations } from "vuex";
export default {
  data: () => ({
    title: "",
    responsive: false
  }),
  methods: {},
  mounted() {
    this.title = this.$router.currentRoute.name;
  }
};
</script>

<style>
#core-app-bar {
  width: auto;
}
#core-app-bar a {
  text-decoration: none;
}
</style>