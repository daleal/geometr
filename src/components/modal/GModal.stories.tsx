import type { Meta, StoryObj } from '@storybook/vue3';
import { GApplication } from '@/components/application';
import { GButton } from '@/components/button';
import { useModal } from '@/composables/modal';
import { GModal } from './index';

// Auxiliar Types
type Story = StoryObj<typeof GModal>;

// Meta
const meta = {
  title: 'components/GModal',
  component: GModal,
  parameters: { controls: { sort: 'requiredFirst' } },
} satisfies Meta<typeof GModal>;

export default meta;

// Base Stories
const BaseStory = (slots: { default: () => JSX.Element, title?: () => JSX.Element }) => ({
  parameters: { layout: 'fullscreen' },
  render: (args) => {
    const { opened, open } = useModal();

    return (
      <GApplication>
        <div>
          <GButton onClick={open}>
            Open!
          </GButton>
        </div>
        <GModal {...args} v-model={opened.value}>
          { slots }
        </GModal>
      </GApplication>
    );
  },
} satisfies Story);

// Exported Stories
export const ModalWithContent = {
  ...BaseStory({
    title: () => <>Some Title</>,
    default: () => <>This is a modal!</>,
  }),
} satisfies Story;

export const ModalWithLargeContent = {
  ...BaseStory({
    title: () => <>Some Title</>,
    default: () => <>
      This is a modal! Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Mauris imperdiet porttitor odio vel viverra. Sed cursus gravida enim et mattis.
      Vivamus eu velit tempus, ullamcorper metus vitae, iaculis libero.
      Etiam ultrices gravida elit, ac auctor diam tristique at.
      Ut et ex ac ipsum convallis sodales non nec erat.
      Duis gravida erat id lectus tristique rutrum.
      Praesent vitae faucibus tellus.
      Mauris eu mauris egestas, consectetur lectus et, semper dolor.
    </>,
  }),
} satisfies Story;

export const PersistentModalWithContent = {
  ...BaseStory({
    default: () => <>This is a modal!</>,
  }),
  args: {
    persistent: true,
  },
} satisfies Story;
