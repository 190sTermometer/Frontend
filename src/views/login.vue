<template>
  <v-container fill-height fluid>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <material-card color="green" title="Edit Profile" text="Complete your profile">
          <v-form>
            <v-container class="py-0">
              <v-row>
                <v-col cols="12" md="4">
                  <v-text-field
                    label="Användarnamn"
                    id="username"
                    prepend-icon="person"
                    type="text"
                    class="purple-input"
                  />
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
                      <v-list-item v-for="(item, i) in items" :key="i" @click="() => {}">
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
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

                <v-col cols="12" md="4">
                  <v-text-field
                    label="Lösenord"
                    id="password"
                    prepend-icon="lock"
                    type="password"
                    class="purple-input"
                  />
                </v-col>

                <v-col cols="12" class="text-right">
                  <v-btn color="success">Update Profile</v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </material-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
export default {
  data() {
    return {
      signUP: false
    };
  }
};
</script>
