import { defineComponent } from 'vue';
import { useRender } from '@/composables/render';

import './GApplication.scss';

export const GApplication = defineComponent({
  name: 'GApplication',
  setup(props, { slots }) {
    useRender(() => (
      <div class="g-application">
        <div class="g-application__scroll">
          <div class="g-application__wrapper">
            { slots.default?.() }
          </div>
        </div>
      </div>
    ));
  },
});

export type GApplication = InstanceType<typeof GApplication>;
