<script setup lang="ts">
import { GGlass } from '@/components/glass';
import { GSeparator } from '@/components/separator';

const slots = defineSlots<{
  default?(props: Record<string, never>): unknown,
  header?(props: Record<string, never>): unknown,
  subtitle?(props: Record<string, never>): unknown,
  content?(props: Record<string, never>): unknown,
  actions?(props: Record<string, never>): unknown,
}>();
</script>

<template>
  <GGlass class="g-card">
    <div
      v-if="slots.header || slots.subtitle || slots.default || slots.content"
      class="g-card__body"
    >
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
      <GSeparator v-if="(slots.header || slots.subtitle) && (slots.default || slots.content)" />
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
    </div>
    <GSeparator v-if="!(slots.header || slots.subtitle || slots.default || slots.content)" />
    <div
      v-if="slots.actions"
      class="g-card__actions"
    >
      <slot name="actions" />
    </div>
  </GGlass>
</template>

<style scoped lang="scss">
@use "./variables";

.g-card {
  display: block;
  overflow: hidden;
  color: variables.$text-color;
}

.g-card__body {
  padding: variables.$card-body-padding;
}

.g-card__header {
  font-size: variables.$card-header-font-size;
  font-weight: variables.$card-header-font-weight;
  letter-spacing: variables.$card-header-letter-spacing;
  line-height: variables.$card-header-line-height;
}

.g-card__subtitle {
  font-size: variables.$card-subtitle-font-size;
  font-weight: variables.$card-subtitle-font-weight;
  letter-spacing: variables.$card-subtitle-letter-spacing;
  line-height: variables.$card-subtitle-line-height;
  opacity: variables.$card-subtitle-opacity;
}

.g-card__content {
  font-size: variables.$card-content-font-size;
  font-weight: variables.$card-content-font-weight;
  letter-spacing: variables.$card-content-letter-spacing;
  line-height: variables.$card-content-line-height;
}

.g-card__actions {
  padding: variables.$card-actions-padding;
  display: flex;
  gap: variables.$card-actions-gap;
  flex-wrap: wrap;
}
</style>
