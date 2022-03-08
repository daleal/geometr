<script setup lang="ts">
import { computed } from 'vue';
import { makeSizeProps, useSize } from '@/composables/size';

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  ...makeSizeProps(),
});

const emit = defineEmits<{(e: 'click'): void}>();

const baseClass = 'g-button';

const { sizeClasses } = useSize(props, baseClass);

const classes = computed(() => [
  baseClass,
  sizeClasses.value,
]);
</script>

<template>
  <button
    :class="classes"
    @click="emit('click')"
  >
    {{ props.text }}
  </button>
</template>

<style lang="scss" scoped>
@use './g-button.scss';
</style>
