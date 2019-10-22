<template>
  <v-container fill-height fluid>
    <v-col justify="center">
      <v-col cols="12" md="8" v-if="!signUP">
        <mCard :color="theme" title="Skapa profil" text="Skapa din helt egna profil">
          <v-form autocomplete="off">
            <v-container class="py-0">
              <v-col>
                <v-col cols="12" md="4">
                  <v-text-field
                    label="Användarnamn"
                    id="username"
                    prepend-icon="person"
                    type="text"
                    class="purple-input"
                  />
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field
                    label="Lösenord"
                    id="password"
                    prepend-icon="lock"
                    type="password"
                    class="purple-input"
                  />
                </v-col>

                <v-col cols="12" md="2">
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
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field
                    label="Email adress"
                    id="adresss"
                    prepend-icon="accessible"
                    type="email"
                    class="purple-input"
                  />
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field
                    label="Förnamn"
                    id="firstname"
                    prepend-icon="accessibility"
                    type="text"
                    class="purple-input"
                  />
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field
                    label="Efternamn"
                    id="surname"
                    prepend-icon="accessible"
                    type="text"
                    class="purple-input"
                  />
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    label="Adress"
                    id="andress"
                    prepend-icon="room"
                    type="text"
                    class="purple-input"
                  />
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field
                    label="Stad"
                    id="stad"
                    prepend-icon="home"
                    type="text"
                    class="purple-input"
                  />
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field
                    label="land"
                    id="country"
                    prepend-icon="language"
                    type="text"
                    class="purple-input"
                  />
                </v-col>

                <v-col cols="12" md="4" class="text-right">
                  <v-btn :color="theme" @click="signUP= !signUP">Skapa profil</v-btn>
                </v-col>
              </v-col>
            </v-container>
          </v-form>
        </mCard>
      </v-col>

      <v-col cols="12" md="6" v-if="signUP">
        <mCard :color="theme" title="Logga in" text="Logga in...">
          <v-form>
            <v-container class="py-0">
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    label="Användarnamn"
                    id="username1"
                    prepend-icon="person"
                    type="text"
                    class="purple-input"
                  />
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field
                    label="Lösenord"
                    id="password1"
                    prepend-icon="lock"
                    type="password"
                    class="purple-input"
                  />
                </v-col>

                <v-col cols="6" md="6" class="text-left">
                  <v-btn outlined color="tertiary" @click="signUP= !signUP">Skapa ny profil</v-btn>
                </v-col>

                <v-col cols="6" md="6" class="text-right">
                  <v-btn :color="theme" @click="verify">Logga in</v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </mCard>
      </v-col>
    </v-col>
  </v-container>
</template>


<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "LoggaIn",
  components: {
    mCard: () => import("@/components/material/card")
  },
  data: () => ({
    signUP: true,
    verifyUser: false,
    verifyPass: false,
    testAccounts: {
      username: "abcde",
      password: "12345"
    }
  }),
  methods: {
    verify() {
      if (
        username1.value == this.testAccounts.username &&
        password1.value == this.testAccounts.password
      ) {
        this.verifyUser = !this.verifyUser;
        alert("Användarnamn funkar (⌐■_■)");
        this.setCookie("login", {
          username: username1.value,
          password: password1.value
        });
      } else {
        alert("Användarnamn error 😢");
      }
    },

    setCookie(cname, cvalue) {
      var d = new Date();
      d.setTime(d.getTime() + 10 * 24 * 60 * 60 * 1000);
      var expires = "expires=" + d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    },

    getCookie(cname) {
      var name = cname + "=";
      var ca = document.cookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }
  },
  mounted() {
    let log = this.getCookie("login");
    if (log) {
      alert("inloggad");
    } else {
      alert("inte inloggad :(");
    }
  },
  computed: {
    ...mapGetters(["theme", "colors"])
  }
};
</script>
