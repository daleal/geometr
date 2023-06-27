import type { Meta, StoryObj } from '@storybook/vue3';
import { GApplication } from '@/components/application';
import { GButton } from '@/components/button';
import { useModal } from '@/composables/modal';
import { GModal } from './index';

// Auxiliar Types
type Story = StoryObj<typeof GModal>;

// Meta
const meta: Meta<typeof GModal> = {
  title: 'components/GModal',
  component: GModal,
  parameters: { controls: { sort: 'requiredFirst' } },
};

export default meta;

// Base Stories
const BaseStory = (slots: { default?: () => JSX.Element }): Story => ({
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
});

// Exported Stories
export const ModalWithContent: Story = {
  ...BaseStory({
    default: () => <>This is a modal!</>,
  }),
};
