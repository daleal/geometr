<script setup lang="ts">
import { useCustomBodyClass } from '@/composables/customBodyClass';
import { useViewHeight } from '@/composables/viewHeight';
import { GGlass } from '@/components/glass';

const slots = defineSlots<{
  default(props: Record<string, never>): unknown,
  footer?(props: Record<string, never>): unknown,
}>();

useCustomBodyClass();
const { viewHeight } = useViewHeight();
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
      <GGlass
        v-if="slots.footer"
        :border-radius="0"
      >
        <div class="g-application__footer">
          <slot name="footer" />
        </div>
      </GGlass>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "./variables";

.g-application {
  position: absolute;
  width: 100vw;
  height: v-bind(viewHeight);
  overflow: hidden;
  color: variables.$text-color;
  background-color: variables.$background-base;
  background-image:
    radial-gradient(at 72% 33%, variables.$background-accent-1 0, transparent 49%),
    radial-gradient(at 31% 60%, variables.$background-accent-2 0, transparent 55%);
}

.g-application__scroll {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: auto;
  width: 100%;
  height: 100%;
}

.g-application__wrapper {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  padding: variables.$application-padding;
}

.g-application__footer {
  padding: variables.$footer-padding;
}
</style>
