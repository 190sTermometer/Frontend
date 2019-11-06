<template>
  <div>
    <v-col cols="12" md="6">
      <mCard :color="theme" title="Logga in" text="Logga in...">
        <v-form>
          <v-row>
            <v-col cols="6" md="6">
              <v-text-field
                label="Användarnamn"
                v-model="username"
                prepend-icon="person"
                type="text"
                :color="theme"
              />
            </v-col>

            <v-col cols="6" md="6">
              <v-text-field
                label="Lösenord"
                v-model="password"
                prepend-icon="lock"
                type="password"
                :color="theme"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6">
              <v-btn :color="theme" @click="login">Login</v-btn>
            </v-col>
          </v-row>
        </v-form>
      </mCard>
    </v-col>
  </div>
</template>


<script>
import { mapGetters, mapMutations } from "vuex";
import mCard from "@/components/material/card";

export default {
  name: "Login",
  components: {
    mCard
  },
  data: () => ({
    username: "",
    password: ""
  }),
  methods: {
    login() {
      let username = this.username;
      let password = this.password;
      this.$store
        .dispatch("login", { username, password })
        .then(response => {
          this.$toast(response);

          this.$router.push("/");
        })
        .catch(err => this.$toast(err));
    }
  },
  mounted() {
    if (this.isLoggedIn) {
      this.$router.push("/");
    }
  },
  computed: {
    ...mapGetters(["theme", "colors", "isLoggedIn"])
  }
};
</script>

