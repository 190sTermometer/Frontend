<template>
  <div>
    <v-col cols="12" md="8">
      <mCard :color="theme" title="Skapa profil" text="Skapa din helt egna profil">
        <v-form autocomplete="off">
          <v-text-field
            required
            label="Username"
            v-model="username"
            prepend-icon="person"
            type="text"
            :color="theme"
          />

          <v-text-field
            required
            label="Password"
            v-model="password"
            prepend-icon="lock"
            type="password"
            :color="theme"
          />

          <v-text-field
            label="Email"
            :color="theme"
            v-model="email"
            prepend-icon="accessible"
            type="email"
          />

          <v-text-field
            required
            label="Name"
            v-model="name"
            prepend-icon="accessible"
            type="text"
            :color="theme"
          />

          <v-text-field label="City" :color="theme" v-model="city" prepend-icon="home" type="text" />

          <v-text-field
            label="Country"
            :color="theme"
            v-model="country"
            prepend-icon="language"
            type="text"
          />

          <v-btn :color="theme" @click="register">Register</v-btn>
        </v-form>
      </mCard>
    </v-col>
  </div>
</template>


<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Register",
  components: {
    mCard: () => import("@/components/material/card")
  },
  data: () => ({
    username: "",
    password: "",
    email: "",
    name: "",
    city: "",
    country: ""
  }),
  methods: {
    register() {
      let data = {
        namn: this.name,
        password: this.password,
        username: this.username,
        admin: false
      };
      this.$store
        .dispatch("register", data)
        .then(() => {
          this.$toast(response);
          this.$router.push("/");
        })
        .catch(err => {
          this.$toast(err);
          console.log(err);
        });
    },
    ...mapMutations(["olleFunc"])
  },
  mounted() {
    if (this.isLoggedIn) {
      this.$router.push("/");
    }
  },
  computed: {
    ...mapGetters(["theme", "colors", "isLoggedIn", "olleBilder", "olle"])
  }
};
</script>
