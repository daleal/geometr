import { defineComponent } from 'vue';
import { useRender } from '@/composables/render';

export const GButton = defineComponent({
  name: 'GButton',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  emits: {
    click: () => true,
  },
  setup(props, { emit }) {
    useRender(() => (
      <button onClick={() => emit('click')}>
        { props.text }
      </button>
    ));
  },
});

export type GButton = InstanceType<typeof GButton>;
