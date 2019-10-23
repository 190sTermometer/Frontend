<template>
  <v-text-field
    label="Sök"
    prepend-inner-icon="mdi-magnify"
    type="text"
    solo
    flat
    hide-details
    @keydown="inputChange"
    id="search"
  />
</template>

<script>
import { mapMutations, mapState, mapGetters } from "vuex";

export default {
  name: "Search",
  computed: {
    ...mapGetters(["theme", "colors"])
  },
  created() {},
  methods: {
    ...mapMutations(["setTheme"]),
    inputChange(e) {
      if ((e.key = "Enter")) {
        console.log(e, search.value);
      }
    }
  }
};
</script>


<style scoped>
.custom-input {
  margin: 0 12px;
}
</style>