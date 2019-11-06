<template>
  <v-card class="pa-2 white" flat>
    <v-card-text>
      <h1 class="white--text display-1">{{title}}</h1>
      <v-row class="d-flex align-content-start flex-wrap" style="margin-top: 20px;">
        <slot />
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapMutations, mapState, mapGetters } from "vuex";

export default {
  name: "CoreView",
  props: {
    name: {
      type: String,
      required: false,
      default: ""
    }
  },
  computed: {
    title() {
      return this.$store.getters.title.split("_").join(" ");
    },
    ...mapGetters([
      "theme",
      "colors",
      "modes",
      "mode",
      "snackbar",
      "snackbarText"
    ])
  }
};
</script>
<style >
.scroll-area {
  position: relative;
  margin: auto;
  width: 600px;
  height: 400px;
}
</style>