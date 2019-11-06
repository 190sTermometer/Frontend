<template>
  <v-menu
    :close-on-content-click="false"
    :nudge-width="200"
    offset-x
    transition="slide-y-transition"
    v-model="open"
  >
    <template v-slot:activator="{ on }">
      <!-- <v-avatar :color="theme" fab v-on="on">
        <v-img
          src=""
        ></v-img>
      </v-avatar>-->
      <v-btn class="mx-2" :color="theme" fab dark depressed v-on="on">
        <v-icon dark>mdi-account</v-icon>
      </v-btn>
    </template>

    <v-card>
      <v-list>
        <div v-if="isLoggedIn">
          <v-col>
            <v-list-item>
              <v-avatar>
                <v-img :src="olle"></v-img>
              </v-avatar>
              <v-list-item-title class="s-username">{{username}}</v-list-item-title>
            </v-list-item>
          </v-col>

          <v-divider class="mx-3 mb-3" />
          <v-col>
            <v-btn :color="theme" depressed @click="logout">Logout</v-btn>
          </v-col>
        </div>
        <div v-else>
          <v-col class="d-flex justify-space-between">
            <v-btn :color="theme" depressed to="/login">Login</v-btn>
            <v-btn :color="theme" depressed to="/register">Register</v-btn>
          </v-col>
        </div>
      </v-list>
    </v-card>
  </v-menu>
</template>

<script>
import { mapMutations, mapState, mapGetters } from "vuex";

export default {
  name: "ProfileSettings",
  computed: {
    mode() {
      return this.$store.getters.mode;
    },
    ...mapGetters([
      "theme",
      "colors",
      "isLoggedIn",
      "username",
      "olle",
      "olleBilder"
    ])
  },
  data: () => ({
    open: false
  }),
  methods: {
    logout: function() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    },
    ...mapMutations(["setTheme"])
  },
  mounted() {
    document.addEventListener("keydown", event => {
      let key = event.key;
      if (key == "p") {
        this.open = !this.open;
      }
    });
  }
};
</script>

<style>
.s-username {
  margin: 0 10px;
}
</style>