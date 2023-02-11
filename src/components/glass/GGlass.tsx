import { defineComponent } from 'vue';
import { useRender } from '@/composables/render';

import './GGlass.scss';

export const GGlass = defineComponent({
  name: 'GGlass',
  setup(props, { slots }) {
    useRender(() => (
      <div class="g-glass">
        { slots.default?.() }
      </div>
    ));
  },
});

export type GGlass = InstanceType<typeof GGlass>;
