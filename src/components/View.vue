<template>
  <v-card class="pa-2 white">
    <v-card-text>
      <h1 class="display-1 white--text ma-3">{{title.split("_").join(" ")}}</h1>
      <v-row class="d-flex align-content-start flex-wrap" style="margin-top: 20px;">
        <slot />
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "CoreView",
  props: {
    name: {
      type: String,
      required: false,
      default: ""
    }
  },
  data: () => ({}),
  mounted() {},
  methods: {},
  components: {},
  computed: {
    title() {
      return this.$store.getters.title;
    }
  }
};
</script>