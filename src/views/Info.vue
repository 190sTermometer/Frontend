<template>
  <v-container>
    <Loader v-if="$wait.any" />
    <CoreView v-if="!$wait.any" :name="this.device.name" :class="theme">
      <v-col md="6" fluid>
        <Chart style="z-index: -1111" detailed :chart-data="datacollection" />
      </v-col>
      <v-col md="6" fluid>
        <SimonMap />
      </v-col>
      <v-col cols="6">
        <h1 class="white--text title">Senaste temperaturen: {{getLatestTemp}}</h1>
        <h1 class="white--text title">Senaste luftfuktighet: {{getLatestHum}}</h1>
      </v-col>
      <v-col cols="6">
        <v-select
          v-model="defaultSelected"
          :items="offsets"
          item-text="name"
          item-value="value"
          label="Sortering"
          solo
          dark
          filled
          flat
          @change="sort"
        ></v-select>
      </v-col>
    </CoreView>
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
    datacollection: null,
    device: {},
    initLabels: [],
    updateList: [],
    defaultSelected: { name: "Month", value: 24 * 60 * 60 * 1000 * 7 * 30 },
    offsets: [
      { name: "Hour", value: 60 * 60 },
      { name: "Day", value: 24 * 60 * 60 * 1000 },
      { name: "Week", value: 24 * 60 * 60 * 1000 * 7 },
      { name: "Month", value: 24 * 60 * 60 * 1000 * 7 * 30 }
    ]
  }),
  mounted() {
    this.loadValues();
    this.$store.state.title = this.name;

    setInterval(() => {
      // this.$wait.start("home");
      this.$store.dispatch("getKnownDevices").then(() => {
        // this.$wait.end("home");
      });
      this.loadValues();
    }, (this.device.updateInterval / 2) * 1000);
  },
  computed: {
    getLatestTemp() {
      try {
        return this.device.latestData.temperature;
      } catch (e) {
        return e;
      }
    },
    getLatestHum() {
      try {
        return this.device.latestData.humidity;
      } catch (e) {
        return e;
      }
    },
    ...mapGetters(["theme", "colors"])
  },
  beforeRouteUpdate(to, from, next) {
    this.load(to, to.params.name);
    next();
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: this.updateList,
        datasets: [
          {
            label: "",
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            scaleFontColor: "rgba(255, 255, 255, 1)",
            borderColor: "rgba(255, 255, 255, 1)",
            borderWidth: 2,
            data: this.device.data.map(i => {
              return i.temperature;
            })
          },
          {
            label: "",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            scaleFontColor: "rgba(255, 255, 255, 1)",
            borderColor: "rgba(255, 255, 255, 1)",
            borderWidth: 2,
            data: this.device.data.map(i => {
              return i.humidity;
            })
          }
        ]
      };
    },
    loadValues() {
      this.initLabels = [];
      this.updateList = [];

      this.$store.state.knownDevices.forEach(device => {
        if (device.name == this.name) {
          this.device = device;
        }
      });

      this.device.data.forEach(i => {
        this.initLabels.push(i.time);
        this.updateList.push(i.time);
      });

      this.fillData();
    },
    sort(offset) {
      var myDate = new Date();
      /*console.log(this.initLabels);
      this.updateList = this.initLabels.filter(date => {
        myDate.setTime(myDate.getTime() - offset);

        return date > myDate;
      });

      this.fillData();*/
    }
  }
};
</script>