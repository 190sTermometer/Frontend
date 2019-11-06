<template>
  <v-col cols="4">
    <v-card
      dark
      href="#"
      :class="theme"
      @mouseover="hover = true"
      @mouseleave="hover = false"
      :to="'/info/' + this.device.name"
    >
      <v-card-title>
        <span class="title">{{getName()}}</span>
      </v-card-title>
      <v-card-text>
        <span class="body-2 white--text">{{getTemperature()}}</span>
      </v-card-text>
      <Chart :height="200" :chartData="datacollection" />
    </v-card>
  </v-col>
</template>

<script>
import Chart from "@/components/Chart";
import { mapGetters, mapMutations } from "vuex";

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
    },
    ...mapGetters(["theme", "colors"])
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      this.device.data = this.device.data.filter(i => {
        return typeof i !== "string";
      });

      this.datacollection = {
        labels: new Array(this.device.data.length),
        datasets: [
          {
            label: "Dataset",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderColor: "rgba(255, 255, 255, 1)",
            borderWidth: 2,
            data: this.device.data.map(i => {
              return i.temperature;
            })
          },
          {
            label: "Dataset",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderColor: "rgba(255, 255, 255, 1)",
            borderWidth: 2,
            data: this.device.data.map(i => {
              return i.humidity;
            })
          }
        ]
      };
    },
    getName() {
      return this.device.name.split("_").join(" ");
    },
    getTemperature() {
      return `${this.device.data[this.device.data.length - 1].temperature}°C / ${this.device.data[this.device.data.length - 1].humidity}%`;
    }
  },
  components: {
    Chart
  }
};
</script>