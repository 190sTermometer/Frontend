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

    <v-card>
      <v-list>
        <v-col cols="12">
          <div class="text-center body-2 text-uppercase sidebar-filter">Inställningar</div>
          <v-divider class="mx-3 mb-3" />
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
        <v-divider class="mx-3 mb-3" />
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
    ...mapGetters(["theme", "colors"])
  },
  created() {},
  data: () => ({
    open: false
  }),
  methods: {
    ...mapMutations(["setTheme"])
  },
  mounted() {
    var max = this.$store.state.colors.length;
    document.addEventListener("keydown", event => {
      let key = event.key;
      if (key == "i") {
        this.open = !this.open;
      }
      if (key <= max && key != "0") {
        this.setTheme(this.$store.state.colors[key - 1]);
      }
    });
  }
};
</script>
