<script setup lang="ts">
import './GApplication.scss';

defineSlots<{
  default(props: Record<string, never>): unknown,
}>();
</script>

<template>
  <div class="g-application">
    <div class="g-application__scroll">
      <div
        class="g-application__wrapper"
        v-bind="$attrs"
      >
        <slot name="default" />
      </div>
    </div>
  </div>
</template>
