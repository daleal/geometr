<script setup lang="ts">
import { computed } from 'vue';

const $props = defineProps<{
  text: string,
}>();

const $emit = defineEmits<{(e: 'click'): void}>();

const classes = computed(() => ['g-button']);
</script>

<template>
  <button
    :class="classes"
    @click="$emit('click')"
  >
    {{ $props.text }}
  </button>
</template>

<style lang="scss" scoped>
@use './g-button.scss';
</style>
