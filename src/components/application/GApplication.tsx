import { defineComponent } from 'vue';
import { useRender } from '@/composables/render';

import './GApplication.scss';

export const GApplication = defineComponent({
  name: 'GApplication',
  setup(props, { slots }) {
    useRender(() => (
      <div class="g-application">
        { slots.default?.() }
      </div>
    ));
  },
});

export type GApplication = InstanceType<typeof GApplication>;
