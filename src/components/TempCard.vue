<template>
  <v-card
    href="#"
    class="ma-3"
    width="300"
    @mouseover="hover = true"
    @mouseleave="hover = false"
    :to="'/info/' + this.device.Name"
  >
    <v-card-title>{{device.Name}}</v-card-title>
    <Chart :chart-data="datacollection" />
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
  created() {
    this.fillData();
    console.log(this.device);
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
            backgroundColor: "rgba(255, 99, 132, 0.1)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 2,
            data: this.device.Temperature // Array.from({ length: 10 }, () => Math.floor(Math.random() * 40))
          }
        ]
      };
    }
  },
  components: {
    Chart
  }
};
</script>