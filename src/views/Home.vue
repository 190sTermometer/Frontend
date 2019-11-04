<template>
  <v-container>
    <Loader v-if="$wait.any" />
    <CoreView v-if="!$wait.any" :class="mode">
      <v-col v-for="item in filteredList" :key="item.Name" cols="4">
        <TempCard :device="item" />
      </v-col>
    </CoreView>
  </v-container>
</template>

<script>
import TempCard from "@/components/TempCard";
import Loader from "@/components/Loader";
import CoreView from "@/components/View";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Home",
  components: { TempCard, Loader, CoreView },
  data: () => ({}),
  mounted() {},
  computed: {
    filteredList() {
      console.log(this.$store.getters.knownDevices);
      return this.$store.getters.knownDevices.filter(device => {
        return device.Name.toLowerCase()
          .split("_")
          .join(" ")
          .includes(this.$store.state.search.toLowerCase());
      });
    },
    ...mapGetters([
      "theme",
      "colors",
      "userDetails",
      "isLoggedIn",
      "authStatus",
      "mode",
      "modes",
      "search"
    ])
  }
};
</script>
