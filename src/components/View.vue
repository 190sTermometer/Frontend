<template>
  <v-card class="pa-2">
    <v-card-text>
      <h1 class="display-1 ma-3">{{title}}</h1>
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
      default: null
    }
  },
  data: () => ({
    title: "HEJ"
  }),
  mounted() {
    this.title = this.name || this.$router.currentRoute.name;
  },

  methods: {},
  components: {},
  computed: {}
};
</script>