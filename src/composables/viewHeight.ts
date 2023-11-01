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

const INITIAL_VIEW_HEIGHT = window?.innerHeight || 1000;
const rawViewHeight = ref(INITIAL_VIEW_HEIGHT);

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
