<template>
  <v-card v-bind="$attrs" v-on="$listeners">
    <v-card
      v-if="!$slots.offset"
      :color="color"
      :elevation="elevation"
      class="v-card--material__header d-flex align-center offset"
      dark
      min-height="80"
    >
      <slot v-if="!title && !text" name="header" />
      <div v-else class="px-3">
        <h4 class="title font-weight-light mb-2" v-text="title" />
        <p class="category font-weight-thin mb-0" v-text="text" />
      </div>
    </v-card>

    <slot v-else name="offset" />

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
    }
  }
};
</script>

<style>
.offset {
  margin: 0 auto;
  max-width: calc(100% - 32px);
  position: relative;
  z-index: 1;
}
.offset--full-width {
  max-width: 100%;
}
</style>
