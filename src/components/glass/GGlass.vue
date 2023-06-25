<script setup lang="ts">
import './GGlass.scss';

defineSlots<{
  default(props: Record<string, never>): unknown,
}>();
</script>

<template>
  <div class="g-glass">
    <slot name="default" />
  </div>
</template>
