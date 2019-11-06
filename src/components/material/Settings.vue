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
        <v-icon dark>mdi-format-list-bulleted-square</v-icon>
      </v-btn>
    </template>

    <v-card class="py-2">
      <v-list>
        <div class="text-center body-4 mb-3">INSTÄLLNINGAR</div>

        <v-divider class="mx-3" />
        <v-col cols="12">
          <div class="text-center body-2 mb-3">TEMAFÄRG</div>
          <v-row justify-center>
            <v-btn
              v-for="i in colors"
              :key="i"
              class="mx-2"
              :color="i"
              dark
              fab
              x-small
              @click="setTheme(i)"
            ></v-btn>
          </v-row>
        </v-col>

        <v-divider class="mx-3" />
        <v-col cols="12">
          <div class="text-center body-2 mb-3">LIGHTMODE / DARKMODE</div>
          <v-row justify-center>
            <v-btn
              v-for="i in modes"
              :key="i"
              class="mx-2"
              :color="i"
              dark
              fab
              x-small
              @click="setMode(i)"
            ></v-btn>
          </v-row>
        </v-col>
        <v-divider class="mx-3" />
        <v-col cols="12">
          <ShortcutList />
        </v-col>
      </v-list>
    </v-card>
  </v-menu>
</template>

<script>
import { mapMutations, mapState, mapGetters } from "vuex";
import ShortcutList from "./ShortcutList";

export default {
  name: "Settings",
  components: { ShortcutList },
  computed: {
    mode() {
      return this.$store.getters.mode;
    },
    ...mapGetters(["theme", "colors", "modes", "mode"])
  },
  created() {},
  data: () => ({
    open: false
  }),
  methods: {
    ...mapMutations(["setTheme", "setMode"])
  },
  mounted() {
    var max = this.$store.state.colors.length;
    document.addEventListener("keydown", event => {
      let key = event.key;
      if (key == "i") {
        this.open = !this.open;
      }
      if (key == "d") {
        if (this.$store.state.mode == "grey darken-3") {
          this.setMode(this.$store.state.modes[1]);
        } else if (this.$store.state.mode == "grey lighten-5") {
          this.setMode(this.$store.state.modes[0]);
        }
      }
      if (key <= max && key != "0") {
        this.setTheme(this.$store.state.colors[key - 1]);
      }
    });
  }
};
</script>