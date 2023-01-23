<script setup lang="ts">
const props = defineProps<{ text: string }>();
const emit = defineEmits<{ (e: 'click'): void }>();
</script>

<template>
  <button
    @click="emit('click')"
  >
    {{ props.text }}
  </button>
</template>
