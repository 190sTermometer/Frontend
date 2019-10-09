<template>
  <v-container>
    <Loader v-if="loading" />
    <CoreView v-if="!loading">
      <v-col v-for="item in devices" :key="item.Name" cols="4">
        <TempCard :device="item" />
      </v-col>
    </CoreView>
  </v-container>
</template>

<script>
import TempCard from "@/components/TempCard";
import Loader from "@/components/Loader";
import CoreView from "@/components/View";

export default {
  name: "Home",
  components: { TempCard, Loader, CoreView },
  data: () => ({
    title: "Nope",
    loading: true
  }),
  mounted() {
    this.loading = true;

    this.$store.dispatch("getKnownDevices").then(response => {
      this.loading = false;
    });
  },
  computed: {
    devices() {
      return this.$store.getters.knownDevices;
    }
  }
};
</script>
