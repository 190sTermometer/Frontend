<template>
  <div class="home">
    <v-container>
      <Database />
    </v-container>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Database from "@/components/Database.vue";

export default {
  name: "home",
  components: {
    Navigation,
    Database
  },
  mounted() {},
  computed: {},
  methods: {}
};
</script>
