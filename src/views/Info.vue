<template>
  <v-container>
    <Loader v-if="$wait.any" />
    <CoreView v-if="!$wait.any" :name="this.data.Name">
      <v-col md="6" fluid>
        <Chart detailed :chart-data="datacollection" />
        <!-- Ladda om sidan om chart ändrar storlek -->
      </v-col>
      <v-col md="6" fluid>
        <SimonMap></SimonMap>
      </v-col>
    </CoreView>
  </v-container>
</template>

<script>
import Chart from "@/components/Chart";
import Loader from "@/components/Loader";
import CoreView from "@/components/View";
import SimonMap from "@/components/SimonMap";

const axios = require("axios");

export default {
  name: "Info",
  components: { Chart, Loader, CoreView, SimonMap },
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
            backgroundColor: "rgba(255, 99, 132, 0.1)",
            borderColor: "rgba(255, 99, 132, 1)",
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