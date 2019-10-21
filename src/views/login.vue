<template>
  <div class="login">
    <v-row justify="left">
      <v-col v-if="!signUP" cols="12" md="8">
        <v-card class="elevation-6">
          <v-form>
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>Skapa användare</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
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
                  <v-menu
                    bottom
                    offset-y
                  >
                    <template v-slot:activator="{ on }">
                      <v-btn  large fab>
                        <v-avatar 
                          color="grey" 
                          size="62"
                          >
                          <v-img 
                            src="https://assets.marthastewart.com/styles/wmax-520-highdpi/d20/oj-upgrade-103121806/oj-upgrade-103121806_horiz_0.jpg?itok=FwA6P7iy"  
                          />
                          <span class="white--text headline"></span>
                        </v-avatar>
                      </v-btn>
                    </template>
                    <v-list>
                      <v-list-item
                        v-for="(item, i) in items"
                        :key="i"
                        @click="() => {}"
                      >
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

                <v-col cols="12" md="4" class="text-left">
                  <v-btn @click="signUP= !signUP" color="secondary">
                    <span v-if="signUP">skapa användare</span>
                    <span v-if="!signUP">Logga in</span>
                  </v-btn>
                </v-col>

                <v-col cols="12" md="8" class="text-right">
                  <v-btn color="primary" @click="signUP= !signUP">Skapa användare</v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card>
      </v-col>
v-v-col
      <v-col v-if="signUP" cols="12" md="8">
        <v-container>
          <v-flex xs12 sm8 md6>
        v-colv-card class="elevation-4">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Logga in</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field label="Login" name="login" prepend-icon="person" type="text"></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-tooltip xs="12" bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn @click="signUP= !signUP" color="secondary">
                      <span v-if="signUP">skapa användare</span>
                      <span v-if="!signUP">Logga in</span>
                    </v-btn>
                  </template>
                </v-tooltip>
                <v-spacer></v-spacer>
                <v-btn xs="12" color="primary" :to="'/ '">Logga in</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-container>
      </v-col>
    </v-row>
  </div>
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

      items: [
          {
            title: 'Click Me',
          },
          {
            title: 'Click Me',
          },
          {
            title: 'Click Me',
          },
          {
            title: 'Click Me 2',
          },
        ],