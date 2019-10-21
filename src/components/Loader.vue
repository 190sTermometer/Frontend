<template>
  <v-progress-circular
    indeterminate
    size="150"
    width="8"
    color="primary"
    style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%)"
  ></v-progress-circular>
</template>

<script>
export default {
  name: "Loader",
  data: () => ({}),
  methods: {}
};
</script>