<template>
  <div>
    <Loader v-if="$wait.any" />
    <CoreView v-if="!$wait.any" :class="mode">
      <v-row v-if="filteredList.length > 0">
        <TempCard v-for="item in filteredList" :key="item.Name" :device="item" />
      </v-row>
      <v-row v-else>
        <p>Nope</p>
      </v-row>
    </CoreView>
  </div>
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
      return this.$store.getters.knownDevices.filter(device => {
        return device.name
          .toLowerCase()
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
