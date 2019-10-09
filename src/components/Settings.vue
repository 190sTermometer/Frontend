<template>
  <v-menu
    :close-on-content-click="false"
    bottom
    left
    min-width="300"
    max-width="300"
    nudge-left="12"
    offset-x
    transition="slide-y-transition"
  >
    <v-btn class="elevation-0" color="grey" dark fab fixed style="top: 96px;" top>
      <v-icon>mdi-settings</v-icon>
    </v-btn>
    <v-card>
      <v-container grid-list-xl>
        <v-row>
          <v-col cols="12"></v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-menu>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "Settings"
};
</script>
