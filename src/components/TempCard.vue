<template>
  <v-card
    dark
    href="#"
    class="ma-3"
    @mouseover="hover = true"
    @mouseleave="hover = false"
    :to="'/info/' + this.device.Name"
  >
    <v-card-title>
      <span class="title">{{getName()}}</span>
    </v-card-title>
    <v-card-text>
      <span class="body-2 white--text">{{getTemperature()}}</span>
    </v-card-text>
    <Chart :height="200" :chartData="datacollection" />
  </v-card>
</template>

<script>
import Chart from "@/components/Chart";

export default {
  name: "TempCard",
  props: {
    device: Object
  },
  data: () => ({
    hover: false,
    datacollection: null
  }),
  computed: {
    cardStyle() {
      return {
        transform: `scale(${this.hover ? 1.1 : 1})`,
        transition: "all 0.2s ease"
      };
    }
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: Array(this.device.Temperature.length),
        datasets: [
          {
            label: "Dataset",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderColor: "rgba(255, 255, 255, 1)",
            borderWidth: 2,
            data: this.device.Temperature // Array.from({ length: 10 }, () => Math.floor(Math.random() * 40))
          }
        ]
      };
    },
    getName() {
      return this.device.Name.split("_").join(" ");
    },
    getTemperature() {
      return `${
        this.device.Temperature[this.device.Temperature.length - 1]
      }°C / ${this.device.Humidity[this.device.Humidity.length - 1]}%`;
    }
  },
  components: {
    Chart
  }
};
</script>