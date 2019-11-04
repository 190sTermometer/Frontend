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
      <v-col>
        <h1
          class="white--text title"
        >Senaste temperaturen: {{data.Temperature[data.Temperature.length - 1]}}</h1>
      </v-col>
      <v-btn v-for="i in offsets" :key="i.name" @click="sort(i.name)">{{i.name}}</v-btn>
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
    data: [],
    datacollection: null,
    updateList: [],
    labels: [],
    offsets: [
      { name: "hour", value: 60 * 60 },
      { name: "day", value: 24 * 60 * 60 * 1000 },
      { name: "week", value: 24 * 60 * 60 * 1000 * 7 },
      { name: "month", value: 24 * 60 * 60 * 1000 * 7 * 30 }
    ]
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
        labels: this.updateList,
        datasets: [
          {
            label: "",
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            scaleFontColor: "rgba(255, 255, 255, 1)",
            borderColor: "rgba(255, 255, 255, 1)",
            borderWidth: 2,
            data: this.data.Temperature
          }
        ]
      };
    },
    load(to = null, params = null) {
      this.$wait.start("infoS");
      this.$store.dispatch("getDevice", params || this.name).then(response => {
        this.data = response;
        this.$wait.end("infoS");

        this.labels = this.data.UpdatedAt.map(i => new Date(i));
        this.updateList = this.labels;

        this.$store.state.title = params || this.name;

        this.fillData();
      });
    },
    sort(offset) {
      var dateOffset = this.offsets.filter(i => i.name == offset)[0].value;

      var myDate = new Date();
      this.updateList = this.labels.filter(date => {
        myDate.setTime(myDate.getTime() - dateOffset);

        return date > myDate;
      });

      this.fillData();
    }
  }
};
</script>