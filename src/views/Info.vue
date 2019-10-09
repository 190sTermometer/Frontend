<template>
  <v-container>
    <Loader v-if="loading" />
    <h1>{{getName()}}</h1>
    <v-row m="20">
      <Chart detailed :chart-data="datacollection" />
    </v-row>
  </v-container>
</template>

<script>
import Chart from "@/components/Chart";
import Loader from "@/components/Loader";

const axios = require("axios");

export default {
  props: {
    name: String
  },
  data: () => ({
    loading: true,
    data: [],
    datacollection: null
  }),
  mounted() {
    this.$store.dispatch("getDevice", this.name).then(response => {
      this.loading = false;
      this.data = response;

      this.fillData();
    });
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: Array(this.data.Temperature.length),
        datasets: [
          {
            label: "Dataset",
            backgroundColor: "rgba(255, 99, 132, 0.1)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 2,
            data: this.data.Temperature // Array.from({ length: 10 }, () => Math.floor(Math.random() * 40))
          }
        ]
      };
    },
    getName() {
      return this.data.Name.split("_").join(" ");
    }
  },
  components: {
    Chart,
    Loader
  }
};
</script>