<template>
  <div style="position: fixed; bottom: 0; right: 0; z-index: 2000;">
    <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-x>
      <template v-slot:activator="{ on }">
        <v-btn class="mx-2" :color="theme" fab dark v-on="on">
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
        </v-list>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "Settings",
  computed: {
    ...mapGetters(["theme", "colors"])
  },
  created() {},
  methods: {
    ...mapMutations(["setTheme"])
  }
};
</script>
