<template>
    <v-card
        href="#"
        class="ma-3"
        width="270"
        height="200"
        @mouseover="hover = true"
        @mouseleave="hover = false"
        :to="'/info/' + this.name">
        <v-card-title>{{name}}</v-card-title>
        <Chart />
    </v-card>
</template>

<script>
import Chart from "@/components/Chart";

export default {
    name: "TempCard",
    props: {
        name: String
    },
    data: () => ({
        hover: false,
    }),
    computed: {
        cardStyle() {
            return {
                transform: `scale(${this.hover ? 1.1 : 1})`,
                transition: "all 0.2s ease"
            };
        }
    },
    created() {},
    methods: {},
    components: {
        Chart
    }
};
</script>

<style scoped>
</style>