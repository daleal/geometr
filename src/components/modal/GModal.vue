<script setup lang="ts">
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { GGlass } from '@/components/glass';
import { GHeading } from '@/components/heading';

defineSlots<{
  title?(props: Record<string, never>): unknown,
  default(props: Record<string, never>): unknown,
}>();

const props = withDefaults(defineProps<{
  persistent?: boolean,
}>(), {
  persistent: false,
});

const opened = defineModel<boolean>({ required: true });

const modalRef = ref<HTMLElement | null>(null);

const closeModal = () => {
  opened.value = false;
};

onClickOutside(modalRef, () => {
  if (!props.persistent) {
    closeModal();
  }
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
              <GHeading
                v-if="!props.persistent"
                type="h6"
                class="g-modal__header"
              >
                <span class="g-modal__header--title">
                  <slot name="title" />
                </span>
                <span
                  class="g-modal__header--close"
                  @click="closeModal"
                >
                  <span class="mdi mdi-window-close" />
                </span>
              </GHeading>
              <div class="g-modal__content">
                <slot name="default" />
              </div>
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
  margin: auto;
  max-height: calc(100% - #{variables.$modal-margin * 2});
  min-width: variables.$modal-min-width;
  max-width: calc(100% - #{variables.$modal-margin * 2});
  color: variables.$modal-text-color;
  transition: variables.$modal-transition;
}

@media only screen and (width <= 600px) {
  .g-modal__modal {
    min-width: calc(100% - #{variables.$modal-mobile-margin * 2});
    max-width: calc(100% - #{variables.$modal-mobile-margin * 2});
  }
}

.g-modal__header {
  display: flex;
  justify-content: space-between;
  padding: variables.$modal-header-padding;
  border-bottom: variables.$modal-header-border-bottom;
}

.g-modal__header--title {
  margin-right: 1rem;
}

.g-modal__header--close {
  display: inline-block;
  padding: 0 0.1rem;
  cursor: pointer;
}

.g-modal__content {
  padding: variables.$modal-content-padding;
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
