<template>
  <v-container>
    <v-col cols="6">
      <mCard :color="theme" title="Användare" text="Information om användaren">
        <span>Användarnamn: {{username}}</span>
      </mCard>
    </v-col>
    <v-col cols="6">
      <v-btn align-center large fab disabled>
        <v-avatar :color="theme" size="200">
          <v-img
            src="https://assets.marthastewart.com/styles/wmax-520-highdpi/d20/oj-upgrade-103121806/oj-upgrade-103121806_horiz_0.jpg?itok=FwA6P7iy"
          />
          <span class="white--text headline"></span>
        </v-avatar>
      </v-btn>
    </v-col>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "User",
  components: {
    mCard: () => import("@/components/material/card")
  },
  computed: {
    mode() {
      return this.$store.getters.mode;
    },
    ...mapGetters(["theme", "colors", "modes", "isLoggedIn", "username"])
  }
};
</script>