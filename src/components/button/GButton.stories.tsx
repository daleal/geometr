import type { Meta, StoryObj } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';
import { GButton } from './index';

// Auxiliar Types
type Story = StoryObj<typeof GButton>;

// Meta
const meta: Meta<typeof GButton> = {
  title: 'components/GButton',
  component: GButton,
  parameters: { controls: { sort: 'requiredFirst' } },
};

export default meta;

// Actions
const onClickAction = action('click');

// Base Stories
const BaseStory: Story = {
  render: (args) => <GButton {...args} onClick={onClickAction} />,
};

// Exported Stories
export const Primary: Story = {
  ...BaseStory,
  args: {
    text: 'Button',
  },
};
