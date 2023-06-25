<script setup lang="ts">
import { GGlass } from '@/components/glass';

import './GCard.scss';

const slots = defineSlots<{
  default?(props: Record<string, never>): unknown,
  header?(props: Record<string, never>): unknown,
  subtitle?(props: Record<string, never>): unknown,
  content?(props: Record<string, never>): unknown,
}>();
</script>

<template>
  <GGlass class="g-card">
    <div
      v-if="slots.header"
      class="g-card__header"
    >
      <slot name="header" />
    </div>
    <div
      v-if="slots.subtitle"
      class="g-card__subtitle"
    >
      <slot name="subtitle" />
    </div>
    <div
      v-if="slots.default || slots.content"
      class="g-card__content"
    >
      <slot
        v-if="slots.content"
        name="content"
      />
      <slot
        v-else
        name="default"
      />
    </div>
  </GGlass>
</template>
