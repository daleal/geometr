<script setup lang="ts">
const props = withDefaults(defineProps<{
    height?: number,
  }>(), {
  height: 1,
});
</script>

<template>
  <hr class="g-separator">
</template>

<style scoped lang="scss">
@use "./variables";

.g-separator {
  border: none;
  height: calc(variables.$separator-height * v-bind('props.height'));
}
</style>
