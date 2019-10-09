<script>
import { Line, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

export default {
  name: "Chart",
  extends: Line,
  props: {
    detailed: Boolean
  },
  mixins: [reactiveProp],
  data: () => ({
    options: {}
  }),
  mounted() {
    this.options = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            display: this.detailed
          }
        ],
        yAxes: [
          {
            display: this.detailed,
            ticks: {
              beginAtZero: true
            }
          }
        ]
      },
      legend: {
        display: false
      },
      layout: {
        padding: {
          top: this.detailed ? 0 : 160
        }
      },
      elements: {
        point: {
          radius: this.detailed ? 2 : 0
        }
      }
    };

    this.renderChart(this.chartData, this.options);
  },
  computed: {},
  created() {},
  methods: {}
};
</script>