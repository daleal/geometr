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
const BaseStory = (slots: { default?: () => JSX.Element }) => ({
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
    default: () => <>This is a modal!</>,
  }),
} satisfies Story;
