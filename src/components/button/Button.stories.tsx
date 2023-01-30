import type { Meta, StoryObj } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';
import Button from './Button.vue';

// Auxiliar Types
type Story = StoryObj<typeof Button>;

// Meta
const meta: Meta<typeof Button> = {
  title: 'components/Button',
  component: Button,
  parameters: { controls: { sort: 'requiredFirst' } },
};

export default meta;

// Actions
const onClickAction = action('click');

// Base Stories
const BaseStory: Story = {
  render: (args) => <Button {...args} onClick={onClickAction} />,
};

// Exported Stories
export const Primary: Story = {
  ...BaseStory,
  args: {
    text: 'Button',
  },
};
