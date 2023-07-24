import { onMounted, onUnmounted } from 'vue';

export const CUSTOM_BODY_CLASS = 'g-body';

export const useCustomBodyClass = () => {
  onMounted(() => {
    document.body.classList.add(CUSTOM_BODY_CLASS);
  });

  onUnmounted(() => {
    document.body.classList.remove(CUSTOM_BODY_CLASS);
  });
};
