<template>
  <v-menu
    :close-on-content-click="false"
    :nudge-width="200"
    offset-x
    transition="slide-y-transition"
    v-model="open"
  >
    <template v-slot:activator="{ on }">
      <v-btn class="mx-2" :color="theme" fab dark depressed v-on="on">
        <v-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-avatar>
      </v-btn>
    </template>

    <v-card>
      <v-list>
        <v-btn depressed>Logga in</v-btn>
        <v-btn depressed>
          <v-icon right dark>mdi-cloud-upload</v-icon>
          <span>Logga ut</span>
        </v-btn>
        <v-btn depressed>skapa konto</v-btn>
        <v-list-item>
          <v-list-item-title>test3</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>test5</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>test2</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </v-menu>
</template>

<script>
import { mapMutations, mapState, mapGetters } from "vuex";

export default {
  name: "ProfileSettings",
  computed: {
    ...mapGetters(["theme", "colors"])
  },
  data: () => ({
    open: false
  }),
  methods: {
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
