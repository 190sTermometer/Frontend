<template>
  <v-card class="s-offsetbox">
    <v-card
      v-if="!$slots.offset"
      :color="theme"
      :elevation="10"
      class="d-flex align-center s-offset"
      dark
      min-height="80"
    >
      <slot v-if="!title && !text" name="header" />
      <div v-else class="px-3">
        <h4 class="title font-weight-light mb-2" v-text="title" />
        <p class="category font-weight-thin mb-0" v-text="text" />
      </div>
    </v-card>

    <v-card-text>
      <slot />
    </v-card-text>

    <v-divider v-if="$slots.actions" class="mx-3" />

    <v-card-actions v-if="$slots.actions">
      <slot name="actions" />
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "mCard",

  props: {
    title: {
      type: String,
      default: "Title"
    },
    text: {
      type: String,
      default: "Text"
    }
  },

  computed: {
    hasOffset() {
      return (
        this.$slots.header || this.$slots.offset || this.title || this.text
      );
    },
    ...mapGetters(["theme", "colors"])
  }
};
</script>

<style>
.s-offset {
  position: absolute;
  top: -20px;
  width: calc(100% - 10%);
  margin: 0 5%;
  height: 90px;
  padding: 5px;
}
.s-offsetbox {
  padding-top: 60px;
}
</style>
