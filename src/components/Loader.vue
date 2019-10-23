<template>
  <v-progress-circular
    indeterminate
    size="150"
    width="8"
    color="yellow"
    style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%)"
  ></v-progress-circular>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Loader",
  data: () => ({}),
  methods: {
    // color() {
    //   return this.$store.getters.color;
    // }
  },
  computed: {
    ...mapGetters(["theme", "colors", "userDetails"])
  }
};
</script>