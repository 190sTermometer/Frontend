<script>
import { Line, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

export default {
  name: "Chart",
  extends: Line,
  props: {},
  mixins: [reactiveProp],
  data: () => ({
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            display: false
          }
        ],
        yAxes: [
          {
            display: false,
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
          top: 160
        }
      },
      elements: {
        point: {
          radius: 0
        }
      }
    }
  }),
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
  computed: {},
  created() {},
  methods: {}
};
</script>