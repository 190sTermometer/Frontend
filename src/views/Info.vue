<template>
  <v-container>
    <Loader v-if="loading" />
    <CoreView v-if="!loading" :name="getName()">
      <v-col>
        <Chart detailed :chart-data="datacollection" />
      </v-col>
    </CoreView>
  </v-container>
</template>

<script>
import Chart from "@/components/Chart";
import Loader from "@/components/Loader";
import CoreView from "@/components/View";

const axios = require("axios");

export default {
  name: "Info",
  components: { Chart, Loader, CoreView },
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
      this.data = response;
      this.loading = false;

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
  }
};
</script>