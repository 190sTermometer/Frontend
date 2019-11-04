<template>
  <v-text-field
    label="Sök"
    prepend-inner-icon="mdi-magnify"
    type="text"
    hide-details
    solo
    dense
    background-color="green darken-2"
    flat
    @keyup="inputChange"
    id="search"
    v-model="search"
  />
</template>

<script>
import { mapMutations, mapState, mapGetters } from "vuex";

export default {
  name: "Search",
  computed: {
    ...mapGetters(["theme", "colors"])
  },
  data: () => ({
    search: ""
  }),
  created() {},
  methods: {
    ...mapMutations(["setTheme"]),
    inputChange(e) {
      this.$store.state.search = this.search;
      console.log(this.search);
    }
  }
};
</script>


<style scoped>
.custom-input {
  margin: 0 12px;
}
</style>