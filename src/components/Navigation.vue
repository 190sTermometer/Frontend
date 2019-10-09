
<template>
    <v-content>
        <v-toolbar>
            <v-btn v-for="(link, i) in links" :key="i" text :to="link.path">{{link.name}}</v-btn>
            <v-spacer></v-spacer>
            <v-toolbar-title class="gray--text title darken--2">OLLES VÄDERSTATION</v-toolbar-title>
            <v-layout align-center justify-end>
                <v-btn text>SETTINGS</v-btn>
            </v-layout>
        </v-toolbar>
    </v-content>
</template>

<script>
import router from "@/router";

export default {
    name: "Navigation",
    props: {
        name: String
    },
    data: () => ({
        hover: false,
        links: []
    }),
    mounted() {
        this.links = this.$router.options.routes;
    },
    computed: {
        cardStyle() {
            return {
                transform: `scale(${this.hover ? 1.1 : 1})`,
                transition: "all 0.2s ease"
            };
        }
    },
    created() {},
    methods: {}
};
</script>