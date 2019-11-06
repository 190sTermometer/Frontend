<template>
  <div>
    <v-col cols="12" md="8">
      <mCard :color="theme" title="Användare" text="Information om användaren">
        <!-- <v-row class="justify-center py-4">
          <v-img :color="theme" size="92">
            <v-img :src="olle"></v-img>
          </v-img>
        </v-row>-->
        <v-row class="justify-center py-4">
          <v-select
            :items="olleBilder"
            item-text="name"
            item-value="value"
            label="Välj profilbild"
            solo
            outlined
            flat
            @change="olleFunc"
            prepend-icon="person"
          >
            <template>
              <v-list-tile-avatar>
                <img :src="olleBilder" />
              </v-list-tile-avatar>
            </template>
          </v-select>
        </v-row>

        <v-list-item>Användarnamn: {{username}}</v-list-item>
        <v-list-item>Förnamn: {{username}}</v-list-item>
        <v-list-item>Efternamn: {{username}}</v-list-item>
        <v-list-item>Mail: {{username}}</v-list-item>
        <v-list-item>Lösenord: {{username}}</v-list-item>
      </mCard>
    </v-col>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "User",
  components: {
    mCard: () => import("@/components/material/card")
  },
  data: () => ({}),
  methods: {
    ...mapMutations(["olleFunc"])
  },
  mounted() {
    if (!this.isLoggedIn) {
      this.$router.push("/");
    }
  },
  computed: {
    mode() {
      return this.$store.getters.mode;
    },
    ...mapGetters([
      "theme",
      "colors",
      "modes",
      "isLoggedIn",
      "username",
      "olle",
      "olleBilder"
    ])
  }
};
</script>