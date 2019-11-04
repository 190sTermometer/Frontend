<template>
  <v-container>
    <v-text-field
      label="Sök"
      prepend-inner-icon="mdi-magnify"
      type="text"
      flat
      hide-details
      @keyup="inputChange"
      id="search"
      v-model="search"
    />
  </v-container>
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