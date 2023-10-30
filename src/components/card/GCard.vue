<script setup lang="ts">
import { GGlass } from '@/components/glass';
import { GHeading } from '@/components/heading';
import { GSeparator } from '@/components/separator';
import { GText } from '@/components/text';

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
      <GHeading
        v-if="slots.header"
        type="h6"
      >
        <slot name="header" />
      </GHeading>
      <GText
        v-if="slots.subtitle"
        type="body-2"
        class="g-card__subtitle"
      >
        <slot name="subtitle" />
      </GText>
      <GSeparator v-if="(slots.header || slots.subtitle) && (slots.default || slots.content)" />
      <GText
        v-if="slots.default || slots.content"
        type="body-2"
      >
        <slot
          v-if="slots.content"
          name="content"
        />
        <slot
          v-else
          name="default"
        />
      </GText>
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

.g-card__subtitle {
  opacity: variables.$card-subtitle-opacity;
}

.g-card__actions {
  padding: variables.$card-actions-padding;
  display: flex;
  gap: variables.$card-actions-gap;
  flex-wrap: wrap;
}
</style>
