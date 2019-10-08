<template>
    <v-container>
        <v-row v-if="!loading" align="start" no-gutters>
            <TempCard
                v-for="item in movies"
                :key="item.name"
                :name="item.name"
            />
        </v-row>
    </v-container>
</template>

<script>
import TempCard from "@/components/TempCard";

export default {
  name: "Database",
  props: {
  },
  data: () => ({
    loading: false,
    movies: [
        { name: "Simon" },
        { name: "Samuel" },
        { name: "Lisa" },
        { name: "Ylva" },
        { name: "Jamie" }
    ]
  }),
  components: { TempCard }
};
</script>
