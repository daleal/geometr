<script setup lang="ts">
import type { HeadingType } from './types';

defineSlots<{ default(props: Record<string, never>): unknown }>();

const props = withDefaults(defineProps<{
  type?: HeadingType,
}>(), {
  type: 'h3',
});
</script>

<template>
  <component
    :is="props.type"
    :class="`g-${props.type}`"
  >
    <slot />
  </component>
</template>

<style scoped lang="scss">
@use "./variables";

.g-h1 {
  font-size: variables.$h1-font-size;
  font-weight: variables.$h1-font-weight;
  line-height: variables.$h1-line-height;
  letter-spacing: variables.$h1-letter-spacing;
}

.g-h2 {
  font-size: variables.$h2-font-size;
  font-weight: variables.$h2-font-weight;
  line-height: variables.$h2-line-height;
  letter-spacing: variables.$h2-letter-spacing;
}

.g-h3 {
  font-size: variables.$h3-font-size;
  font-weight: variables.$h3-font-weight;
  line-height: variables.$h3-line-height;
  letter-spacing: variables.$h3-letter-spacing;
}

.g-h4 {
  font-size: variables.$h4-font-size;
  font-weight: variables.$h4-font-weight;
  line-height: variables.$h4-line-height;
  letter-spacing: variables.$h4-letter-spacing;
}

.g-h5 {
  font-size: variables.$h5-font-size;
  font-weight: variables.$h5-font-weight;
  line-height: variables.$h5-line-height;
  letter-spacing: variables.$h5-letter-spacing;
}

.g-h6 {
  font-size: variables.$h6-font-size;
  font-weight: variables.$h6-font-weight;
  line-height: variables.$h6-line-height;
  letter-spacing: variables.$h6-letter-spacing;
}
</style>
