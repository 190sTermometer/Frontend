<template>
  <v-menu
    :close-on-content-click="false"
    :nudge-width="200"
    offset-x
    transition="slide-y-transition"
  >
    <template v-slot:activator="{ on }">
      <v-btn class="mx-2" :color="theme" dark depressed v-on="on">
        <v-icon dark>mdi-format-list-bulleted-square</v-icon>shortcuts
      </v-btn>
    </template>
    <v-card>
      <v-list v-for="s in shortcut">
        <span>| {{s.text}} = {{s.key}}</span>
      </v-list>
    </v-card>
  </v-menu>
</template>

<script>
import { mapMutations, mapState, mapGetters } from "vuex";

export default {
  name: "ShortcutList",
  computed: {
    ...mapGetters(["theme", "colors"])
  },
  created() {},
  data: () => ({
    open: false,
    shortcut: {
      i: {
        text: "Visa inställningar",
        key: "i"
      },
      h: {
        text: "Visa Home",
        key: "h"
      }
    }
  }),
  methods: {
    ...mapMutations(["setTheme"])
  },
  mounted() {
    // window.onkeydown = event => {
    //   let key = event.key;
    //   if (key == "i") {
    //     console.log("ddd");
    //     this.open = !this.open;
    //   }
    // };
  }
};
</script>
