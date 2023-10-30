<script setup lang="ts">
import type { TextTag, TextType } from './types';

defineSlots<{ default(props: Record<string, never>): unknown }>();

const props = withDefaults(defineProps<{
  is?: TextTag,
  type?: TextType,
}>(), {
  is: 'p',
  type: 'body-1',
});
</script>

<template>
  <component
    :is="props.is"
    :class="`g-${props.type}`"
  >
    <slot />
  </component>
</template>

<style scoped lang="scss">
@use "./variables";

b {
  font-weight: variables.$bold-font-weight !important;
}

.g-subtitle-1 {
  font-size: variables.$subtitle-1-font-size;
  font-weight: variables.$subtitle-1-font-weight;
  line-height: variables.$subtitle-1-line-height;
  letter-spacing: variables.$subtitle-1-letter-spacing;
  text-transform: variables.$subtitle-1-text-transform;
}

.g-subtitle-2 {
  font-size: variables.$subtitle-2-font-size;
  font-weight: variables.$subtitle-2-font-weight;
  line-height: variables.$subtitle-2-line-height;
  letter-spacing: variables.$subtitle-2-letter-spacing;
  text-transform: variables.$subtitle-2-text-transform;
}

.g-body-1 {
  font-size: variables.$body-1-font-size;
  font-weight: variables.$body-1-font-weight;
  line-height: variables.$body-1-line-height;
  letter-spacing: variables.$body-1-letter-spacing;
  text-transform: variables.$body-1-text-transform;
}

.g-body-2 {
  font-size: variables.$body-2-font-size;
  font-weight: variables.$body-2-font-weight;
  line-height: variables.$body-2-line-height;
  letter-spacing: variables.$body-2-letter-spacing;
  text-transform: variables.$body-2-text-transform;
}
</style>
