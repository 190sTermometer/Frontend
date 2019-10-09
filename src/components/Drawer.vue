<template>
  <v-navigation-drawer
    id="app-drawer"
    v-model="inputValue"
    app
    color="grey darken-2"
    dark
    floating
    mobile-break-point="991"
    persistent
    width="260"
  >
    <template v-slot:img="attrs">
      <v-img v-bind="attrs" gradient="to top, rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)" />
    </template>

    <v-list-item two-line>
      <v-list-item-avatar color="white">
        <v-img
          src="https://agencegenevievechampagne.com/wp-content/uploads/2019/03/default-non-user-no-photo-1.jpg"
          height="34"
          contain
        />
      </v-list-item-avatar>

      <v-list-item-title class="title">namn</v-list-item-title>
    </v-list-item>

    <v-divider class="mx-3 mb-3" />

    <v-list nav>
      <!-- Bug in Vuetify for first child of v-list not receiving proper border-radius -->
      <div />

      <v-list-item
        v-for="(link, i) in links"
        :key="i"
        :to="link.path"
        active-class="primary white--text"
      >
        <v-list-item-action>
          <v-icon>{{ link.icon }}</v-icon>
        </v-list-item-action>

        <v-list-item-title v-text="link.name" />
      </v-list-item>
    </v-list>

    <template v-slot:append></template>
  </v-navigation-drawer>
</template>

<script>
import router from "@/router";

export default {
  name: "Navigation",
  props: {
    name: String
  },
  data: () => ({
    hover: false,
    links: []
  }),
  mounted() {
    this.links = this.$router.options.routes;
  },
  computed: {
    cardStyle() {
      return {
        transform: `scale(${this.hover ? 1.1 : 1})`,
        transition: "all 0.2s ease"
      };
    }
  },
  created() {},
  methods: {}
};
</script>