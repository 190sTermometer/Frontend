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
      <v-list v-for="s in shortcut" :key="s.text">
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
    ...mapGetters(["theme", "colors", "mode"])
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
        text: "Visa profilinställningar",
        key: "p"
      },
      themeSwitcher: {
        text: "Swich theme",
        key: "(numbers)"
      },
      darkmodeToggle: {
        text: "Darkmode / Lightmode toggle",
        key: "d"
      }
    }
  }),
  methods: {
    ...mapMutations(["setTheme"])
  },
  mounted() {
    var max = this.$store.state.colors.length;
  }
};
</script>
