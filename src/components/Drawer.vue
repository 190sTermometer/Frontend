<template>
  <v-navigation-drawer
    id="app-drawer"
    src="https://dsx.weather.com/util/image/v/Euro-temps_1280x720_30897733728.jpg?v=at&w=1280&h=720&api=7db9fe61-7414-47b5-9871-e17d87b8b6a0"
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

      <v-list-item-title class="title">Olles Väder</v-list-item-title>
    </v-list-item>

    <v-divider class="mx-3 mb-3" />

    <v-list nav>
      <v-list-item
        v-for="(link, i) in links"
        :key="i"
        :to="link.path"
        active-class="primary white--text"
      >
        <v-list-item-action>
          <v-icon>{{ link.icon }}</v-icon>
        </v-list-item-action>

        <v-list-item-title v-text="link.view" />
      </v-list-item>
    </v-list>

    <template v-slot:append></template>
  </v-navigation-drawer>
</template>

<script>
import router from "@/router";
import paths from "@/router/paths";

export default {
  name: "Drawer",
  props: {
    name: String
  },
  data: () => ({
    hover: false,
    links: []
  }),
  mounted() {
    this.links = paths;
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