<template>
  <v-container>
    <Loader v-if="$wait.any" />
    <CoreView v-if="!$wait.any">
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
  data: () => ({}),
  mounted() {},
  computed: {
    devices() {
      return this.$store.getters.knownDevices;
    }
  }
};
</script>
