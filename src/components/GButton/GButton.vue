<script setup lang="ts">
const $props = defineProps<{
  text: string,
}>();
</script>

<template>
  {{ $props.text }}
</template>
