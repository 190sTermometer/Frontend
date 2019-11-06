<template>
  <div id="map" style="width: 100%; height: 100%; position: relative;">
    <l-map
      style="position: absolute; z-index: -0;"
      :zoom="zoom"
      :center="center"
      :min-zoom="5"
      :world-copy-jump="false"
      :dragging="false"
    >
      <l-tile-layer :url="url" :attribution="attribution" />
      <l-marker :lat-lng="marker" />
    </l-map>
  </div>
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";

export default {
  name: "SimonMap",
  props: {},
  data: () => ({
    zoom: 16,
    center: [59.638857, 16.589688],
    url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
    attribution: "",
    marker: latLng(59.638857, 16.589688)
  }),
  computed: {},
  mounted() {
    document.getElementsByClassName(
      "leaflet-control-attribution"
    )[0].style.display = "none";
  },
  methods: {},
  components: { LMap, LTileLayer, LMarker }
};
</script>

<style scoped>
#map {
  height: 200px;
  width: 200px;
  margin: 0;
}
.leaflet-top,
.leaflet-bottom {
  z-index: -499;
}
</style>