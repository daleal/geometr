<script setup lang="ts">
import { computed } from 'vue';
import type { Color } from './types';

const slots = defineSlots<{
  default?(props: Record<string, never>): unknown,
  icon?(props: Record<string, never>): unknown,
}>();

const props = withDefaults(defineProps<{
  color?: Color,
}>(), {
  color: 'primary',
});

const emit = defineEmits<{
  click: [];
}>();

const type = computed(() => {
  if (slots.default && slots.icon) {
    return 'text-icon';
  }
  if (!slots.default && slots.icon) {
    return 'icon';
  }
  return 'text';
});
</script>

<template>
  <button
    :class="`g-button color-${props.color}`"
    @click="emit('click')"
  >
    <span
      :class="`g-button__${type}-wrapper`"
    >
      <span
        v-if="slots.icon"
        :class="{
          'padding-right': slots.default,
        }"
      >
        <slot name="icon" />
      </span>
      <span v-if="slots.default">
        <slot name="default" />
      </span>
    </span>
  </button>
</template>

<style scoped lang="scss">
@use "./variables";

.g-button {
  padding: 0.5em;
  border-radius: 7px;
}

.g-button__text-wrapper {
  padding: 0 0.75rem;
}

.g-button__icon-wrapper {
  padding: 0 0.3rem;
}

.g-button__text-icon-wrapper {
  padding: 0 1rem;
}

.padding-right {
  padding-right: 0.7rem;
}

.color-primary {
  background-color: variables.$primary-color;
  color: #fff;
}

.color-secondary {
  background-color: variables.$secondary-color;
  color: #fff;
}
</style>
