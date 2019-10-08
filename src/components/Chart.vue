<Line :chartdata="chartdata" :options="options"/>

<script>
import { Line } from "vue-chartjs";

export default {
    name: "Chart",
    extends: Line,
    props: { },
    data: () => ({
        chartdata: {
            labels: ['January', 'February'],
            datasets: [{
                label: "Dataset",
                backgroundColor: "rgba(255, 99, 132, 0.1)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 0.7,
                data: Array.from({length: 40}, () => Math.floor(Math.random() * 40))
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                    display: false
                }],
                yAxes: [{
                    display: false
                }]
            },
            legend: {
                display: false
            },
            layout: {
                padding: 0
            },
            tooltips: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.yLabel;
                    }
                }
            }
        }
    }),
    mounted() {
        console.log("dd");
        this.renderChart(this.chartdata, this.options);
    },
    computed: {},
    created() {},
    methods: {}
}
</script>