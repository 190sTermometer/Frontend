<template>
  <v-container>
    <v-row class="mb-10" justify="center" md="auto">
      <v-col v-for="item in movies" :key="item.name" md="auto">
        <TempCard :name="item.name" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TempCard from "@/components/TempCard";

export default {
  name: "Database",
  props: {},
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
