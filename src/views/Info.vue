<template>
  <v-container>
    <Loader v-if="$wait.any" />
    <CoreView v-if="!$wait.any" :name="this.data.Name" :class="theme">
      <v-col md="6" fluid>
        <Chart detailed :chart-data="datacollection" />
        <!-- Ladda om sidan om chart ändrar storlek -->
      </v-col>
      <v-col md="6" fluid>
        <SimonMap></SimonMap>
      </v-col>
    </CoreView>
    <v-col md="6" fluid>
      <mCard :color="theme" title="Senaste temperaturen" text="seanste">
        <v-form autocomplete="off">
          <v-container class="py-0"></v-container>
        </v-form>
      </mCard>
    </v-col>
  </v-container>
</template>

<script>
import Chart from "@/components/Chart";
import Loader from "@/components/Loader";
import CoreView from "@/components/View";
import SimonMap from "@/components/SimonMap";
import { mapGetters, mapMutations } from "vuex";
import mCard from "@/components/material/card";

const axios = require("axios");

export default {
  name: "Info",
  components: { Chart, Loader, CoreView, SimonMap, mCard },
  props: {
    name: String
  },
  data: () => ({
    data: [],
    datacollection: null,
    updateList: []
  }),
  mounted() {
    this.load();
  },
  computed: {
    ...mapGetters(["theme", "colors"])
  },
  beforeRouteUpdate(to, from, next) {
    this.load(to, to.params.name);
    next();
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: this.updateList, // new Array(this.data.Temperature.length)
        datasets: [
          {
            label: "",
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            scaleFontColor: "rgba(255, 255, 255, 1)",
            borderColor: "rgba(255, 255, 255, 1)",
            borderWidth: 2,
            data: this.data.Temperature // Array.from({ length: 10 }, () => Math.floor(Math.random() * 40))
          }
        ]
      };
    },
    load(to = null, params = null) {
      this.$wait.start("infoS");
      this.$store.dispatch("getDevice", params || this.name).then(response => {
        this.data = response;
        this.$wait.end("infoS");

        this.updateList = this.data.UpdatedAt.map(i => new Date(i));

        this.$store.state.title = params || this.name;

        this.fillData();
      });
    }
  }
};
</script>