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
    this.plugins = [
      {
        beforeInit: function(chart) {
          var time = chart.options.scales.xAxes[0].time,
            timeDiff = moment(time.max).diff(moment(time.min), "d");
          for (i = 0; i <= timeDiff; i++) {
            var _label = moment(time.min)
              .add(i, "d")
              .format("YYYY-MM-DD HH:mm:ss");
            chart.data.labels.push(_label);
          }
        }
      }
    ];
    this.options = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            type: "time",
            time: {
              parser: "YYYY-MM-DD HH:mm:ss",
              unit: "day",
              displayFormats: {
                day: "ddd"
              },
              min: "2018-10-07 18:43:53",
              max: "2019-10-09 18:43:53"
            },
            ticks: {
              source: "data"
            },
            display: this.detailed
          }
        ],
        yAxes: [
          {
            display: this.detailed
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