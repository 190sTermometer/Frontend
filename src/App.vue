<template>
  <v-app>
    <AppBar />

    <v-content
      src="https://hookagency.com/wp-content/uploads/2015/11/hazemaster-gray-gradient-ui-background.jpg"
      :class="mode"
    >
      <v-fade-transition mode="out-in">
        <router-view class="px-8 py-8" />
      </v-fade-transition>
    </v-content>
  </v-app>
</template>

<script>
import AppBar from "@/components/AppBar";
import vuetifyToast from "vuetify-toast";

export default {
  name: "App",
  components: {
    AppBar
  },
  mounted() {},
  computed: {
    mode() {
      return this.$store.getters.mode;
    }
  }
};
</script>
