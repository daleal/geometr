<script setup lang="ts">
const props = defineProps<{
  text: string;
}>();

const emit = defineEmits<{
  click: [];
}>();
</script>

<template>
  <button @click="emit('click')">
    {{ props.text }}
  </button>
</template>
