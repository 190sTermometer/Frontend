<script>
import { Line, mixins } from "vue-chartjs";
import moment from "moment";
const { reactiveProp } = mixins;

export default {
  name: "Chart",
  extends: Line,
  props: {
    detailed: Boolean,
    chartData: Object
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
            ticks: {
              maxTicksLimit: 20
            },
            display: false, //this.detailed
            gridLines: {
              display: true,
              color: "rgba(255, 255, 255, 0.3)"
            }
          }
        ],
        yAxes: [
          {
            ticks: {
              fontColor: "#fff",
              fontSize: 14
            },
            display: this.detailed,
            gridLines: {
              display: false,
              color: "rgba(255, 255, 255, 0.7)"
            }
          }
        ]
      },
      legend: {
        display: false
      },
      layout: {
        padding: {
          top: this.detailed ? 0 : 80
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