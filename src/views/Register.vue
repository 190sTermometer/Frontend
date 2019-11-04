<template>
  <v-container fill-height fluid>
    <v-col cols="12" md="8">
      <mCard :color="theme" title="Skapa profil" text="Skapa din helt egna profil">
        <v-form autocomplete="off">
          <v-text-field
            required
            label="Username"
            v-model="username"
            prepend-icon="person"
            type="text"
          />

          <v-text-field
            required
            label="Password"
            v-model="password"
            prepend-icon="lock"
            type="password"
          />

          <v-menu bottom offset-y>
            <template v-slot:activator="{ on }">
              <v-btn large fab>
                <v-avatar color="grey" size="62">
                  <v-img
                    src="https://assets.marthastewart.com/styles/wmax-520-highdpi/d20/oj-upgrade-103121806/oj-upgrade-103121806_horiz_0.jpg?itok=FwA6P7iy"
                  />
                  <span class="white--text headline"></span>
                </v-avatar>
              </v-btn>
            </template>
            <v-list>
              <v-list-item-title>hej1</v-list-item-title>
              <v-list-item-title>hej2</v-list-item-title>
              <v-list-item-title>hej3</v-list-item-title>
              <v-list-item-title>hej4</v-list-item-title>
            </v-list>
          </v-menu>

          <v-text-field label="Email" v-model="email" prepend-icon="accessible" type="email" />
          <v-text-field
            label="First name"
            v-model="firstname"
            prepend-icon="accessibility"
            type="text"
            required
          />

          <v-text-field
            required
            label="Last name"
            v-model="lastname"
            prepend-icon="accessible"
            type="text"
          />

          <v-text-field label="Address" v-model="address" prepend-icon="room" type="text" />

          <v-text-field label="City" v-model="city" prepend-icon="home" type="text" />

          <v-text-field label="Country" v-model="country" prepend-icon="language" type="text" />

          <v-btn :color="theme" @click="register">Register</v-btn>
        </v-form>
      </mCard>
    </v-col>
  </v-container>
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
    firstname: "",
    lastname: "",
    address: "",
    city: "",
    country: ""
  }),
  methods: {
    register: function() {
      let data = {
        namn: this.firstname + " " + this.lastname,
        lösenord: this.password,
        användarnamn: this.username,
        admin: false
      };
      this.$store
        .dispatch("register", data)
        .then(() => this.$router.push("/"))
        .catch(err => console.log(err));
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
