<template>
  <v-container>
    <Loader v-if="loading" />

    <v-row v-if="!loading" justify="center" md="auto">
      <v-col v-for="item in devices" :key="item.Name" md="auto">
        <TempCard :device="item" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TempCard from "@/components/TempCard";
import Loader from "@/components/Loader";

export default {
  name: "Database",
  props: {},
  data: () => ({
    loading: true
  }),
  mounted() {
    this.$store.dispatch("getKnownDevices").then(response => {
      this.loading = false;
    });
  },
  components: { TempCard, Loader },
  computed: {
    devices() {
      return this.$store.getters.knownDevices.filter(
        i =>
          i.Temperature.length > 3 &&
          i.Temperature.reduce((a, b) => a + b, 0) / i.Temperature.length >
            10 &&
          /^[ -~\t\n\r]+$/.test(i.Name) &&
          !i.Temperature.includes(0)
      );
    }
  }
};
</script>
