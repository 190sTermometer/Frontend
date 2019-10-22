<template>
  <v-card v-bind="$attrs" v-on="$listeners" class="s-offsetbox">
    <v-card
      v-if="!$slots.offset"
      :color="theme"
      :elevation="elevation"
      class="v-card--material__header d-flex align-center s-offset"
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

  inheritAttrs: false,

  props: {
    color: {
      type: String,
      default: "secondary"
    },
    elevation: {
      type: [Number, String],
      default: 10
    },
    inline: {
      type: Boolean,
      default: false
    },
    fullWidth: {
      type: Boolean,
      default: false
    },
    offset: {
      type: [Number, String],
      default: 24
    },
    title: {
      type: String,
      default: undefined
    },
    text: {
      type: String,
      default: undefined
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
