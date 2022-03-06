<script setup lang="ts">
import { computed } from 'vue';
import { makeSizeProps, useSize } from '@/composables/size';

const $props = defineProps({
  text: {
    type: String,
    required: true,
  },
  ...makeSizeProps(),
});

const $emit = defineEmits<{(e: 'click'): void}>();

const { sizeClasses } = useSize($props);

const classes = computed(() => [
  'g-button',
  sizeClasses.value,
]);
</script>

<template>
  <button
    :class="classes"
    @click="$emit('click')"
  >
    {{ $props.text }}
  </button>
</template>

<script lang="ts">
export default { name: 'GButton' };
</script>

<style lang="scss" scoped>
@use './g-button.scss';
</style>
