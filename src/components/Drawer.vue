<template>
  <!-- https://dsx.weather.com/util/image/v/Euro-temps_1280x720_30897733728.jpg?v=at&w=1280&h=720&api=7db9fe61-7414-47b5-9871-e17d87b8b6a0 -->
  <v-navigation-drawer
    id="app-drawer"
    src="https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-2.32103624.jpg"
    app
    color="grey darken-3"
    dark
    floating
    mobile-break-point="991"
    persistent
    width="260"
  >
  <!-- bredd 60 om (v-if="!hideDrawer") -->
  
    <template v-slot:img="attrs">
      <v-img v-bind="attrs" gradient="to top, rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)" />
    </template>

    <v-list-item two-line>
      <v-list-item-action>
        <v-btn x-small fab @click="hideDrawer= !hideDrawer">
          <v-avatar color="grey" size="35">
            <v-img
              src="https://assets.marthastewart.com/styles/wmax-520-highdpi/d20/oj-upgrade-103121806/oj-upgrade-103121806_horiz_0.jpg?itok=FwA6P7iy"
            />
          </v-avatar>
        </v-btn>
      </v-list-item-action>
      <v-list-item-title v-if="!hideDrawer" class="title font-weight-regular">Olles Väder</v-list-item-title>
    </v-list-item>

    <v-divider class="mx-3 mb-3" />

    <v-list nav>
      <v-list-item v-for="(link, i) in links" :key="i" :to="link.path" :active-class="theme">
        <v-list-item-action>
          <v-icon>{{ link.icon }}</v-icon>
        </v-list-item-action>

        <v-list-item-title  v-if="!hideDrawer" v-text="link.view" />
      </v-list-item>

      <v-list-group prepend-icon="settings" no-action v-if="!hideDrawer" >
        <template v-slot:activator>
          <v-list-item-title>Enheter</v-list-item-title>
        </template>

        <v-list-item v-for="i in devices" :key="i.Name" link @click="changeParams(i.Name)">
          <v-list-item-title>{{getName(i.Name)}}</v-list-item-title>
        </v-list-item>
      </v-list-group>
    </v-list>

    <template v-slot:append>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content v-if="!hideDrawer">
          <v-list-item-title>Samuel</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </template>
  </v-navigation-drawer>
</template>

<script>
import router from "@/router";
import paths from "@/router/paths";
import { Chrome } from "vue-color";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Drawer",
  props: {
    name: String
  },
  data: () => ({
    hover: false,
    links: [],
    fav: true,
    menu: false,
    message: false,
    hints: true,
    hideDrawer: false,
    Path: ""
  }),
  mounted() {
    this.links = paths;

    this.$wait.start("home");
    this.$store.dispatch("getKnownDevices").then(() => {
      this.$wait.end("home");
    });
  },
  computed: {
    cardStyle() {
      return {
        transform: `scale(${this.hover ? 1.1 : 1})`,
        transition: "all 0.2s ease"
      };
    },
    devices() {
      return this.$store.getters.knownDevices;
    },
    color() {
      return this.$store.getters.color;
    },
    ...mapGetters(["theme", "colors", "hideDrawer"])
  },
  created() {},
  methods: {
    getName(name) {
      return name.split("_").join(" ");
    },
    ...mapMutations(["setTheme"]),
    changeParams(param) {
      this.$router.push({ name: "Info", params: { name: param } });
    },
    GetRandomPath() {
      var max = this.links.length;
      this.Path = this.links[this.Random(0, max)];
    }
  }
};
</script>