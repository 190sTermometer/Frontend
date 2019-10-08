<template>
  <v-layout>
    <v-card xs2>
      <v-flex v-for="(item, index) in TempData.data.UpdatedAt" :key="index">
        <h4>
          {{item}}
        </h4>
      </v-flex>
    </v-card>
    <v-card xs2>
      <v-flex v-for="(item, index) in TempData.data.Temperature" :key="index">
        <h4>
          {{item}}
        </h4>
      </v-flex>
    </v-card>
    <v-card xs2>
      <v-flex v-for="(item, index) in TempData.data.Humidity" :key="index">
        <h4>
          {{item}}
        </h4>
      </v-flex>
    </v-card>
  </v-layout>
</template>

<script>
import Chart from "@/components/Chart";

const axios = require('axios');

export default {
  data: () => ({
      TempData: "",
  }),

    created() {
        let date= new Date();
        console.log("Nu är den skapad "+ date.toLocaleTimeString)
        this.fetch();
    },
    methods: {
      async fetch(){
          let self= this;
          const {data} = await axios.get('https://y6ituq9hnf.execute-api.us-east-1.amazonaws.com/test/device/data?name=ZZZZ_enhet');
          console.log(data);
          self.TempData= data;
      }
    }
}

</script>

<style scoped>

</style>