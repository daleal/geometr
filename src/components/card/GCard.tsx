import { defineComponent, computed } from 'vue';
import { useRender } from '@/composables/render';

import { GGlass } from '@/components/glass';

import './GCard.scss';

export const GCard = defineComponent({
  name: 'GCard',
  setup(props, { slots }) {
    const header = computed(() => slots.header?.());
    const subtitle = computed(() => slots.subtitle?.());
    const content = computed(() => slots.content?.() || slots.default?.());
    useRender(() => (
      <GGlass class="g-card">
        {
          header.value && <div class="g-card__header">
            { header.value }
          </div>
        }
        {
          subtitle.value && <div class="g-card__subtitle">
            { subtitle.value }
          </div>
        }
        {
          content.value && <div class="g-card__content">
            { content.value }
          </div>
        }
      </GGlass>
    ));
  },
});

export type GCard = InstanceType<typeof GCard>;
