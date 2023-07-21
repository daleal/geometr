/**
 * A hack to be able to use the view height attribute
 * when on mobile and avoid weird overflow bugs.
 */

import {
  computed,
  onMounted,
  onUnmounted,
  ref,
} from 'vue';

const rawViewHeight = ref(window.innerHeight);

export const useViewHeight = () => {
  const setViewHeight = () => {
    rawViewHeight.value = window.innerHeight;
  };

  onMounted(() => {
    window.addEventListener('resize', setViewHeight);
  });
  onUnmounted(() => {
    window.removeEventListener('resize', setViewHeight);
  });

  const viewHeight = computed(() => `${rawViewHeight.value}px`);

  return { rawViewHeight, viewHeight };
};
