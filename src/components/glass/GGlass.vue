<script setup lang="ts">
defineSlots<{
  default(props: Record<string, never>): unknown,
}>();
</script>

<template>
  <div class="g-glass">
    <slot name="default" />
  </div>
</template>

<style scoped lang="scss">
@use "./variables";

.g-glass {
  display: inline-block;
  position: relative;
  padding: 0;
  border-radius: 1rem;
  background-color: variables.$glass-background-color;
  backdrop-filter: blur(1rem) saturate(180%);
  border: 1px solid variables.$glass-border-color;
  box-shadow: variables.$glass-internal-brightness;
}
</style>
