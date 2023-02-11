import { getCurrentInstance } from '@/utils/currentInstance';

import type { VNode } from 'vue';

export const useRender = (render: () => VNode) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const instance = getCurrentInstance('useRender') as any;
  instance.render = render;
};
