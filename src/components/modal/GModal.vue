<script setup lang="ts">
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { GGlass } from '@/components/glass';

defineSlots<{
  default(props: Record<string, never>): unknown,
}>();

const opened = defineModel<boolean>({ required: true });

const modalRef = ref<HTMLElement | null>(null);

onClickOutside(modalRef, () => {
  opened.value = false;
});
</script>

<template>
  <Teleport to="body">
    <Transition name="transition">
      <div
        v-if="opened"
        class="g-modal__component"
      >
        <div class="g-modal__overlay">
          <div class="g-modal__wrapper">
            <GGlass
              ref="modalRef"
              class="g-modal__modal"
            >
              <slot name="default" />
            </GGlass>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped lang="scss">
@use "./variables";

.g-modal__component {
  transition: variables.$overlay-transition;
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}

.g-modal__overlay {
  background-color: variables.$overlay-color;
  width: 100%;
  height: 100%;
}

.g-modal__wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.g-modal__modal {
  margin: variables.$modal-margin;
  padding: variables.$modal-padding;
  max-height: calc(100% - #{variables.$modal-margin * 2});
  width: calc(100% - #{variables.$modal-margin * 2});
  max-width: calc(100% - #{variables.$modal-margin * 2});
  color: variables.$modal-text-color;
  transition: variables.$modal-transition;
  overflow-x: hidden;
  overflow-y: auto;
}

.transition-enter-from {
  opacity: 0;
}

.transition-leave-to {
  opacity: 0;
}

.transition-enter-from .g-modal__modal,
.transition-leave-to .g-modal__modal {
  transform: scale(1.1);
}
</style>
