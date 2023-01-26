import type { Meta, StoryObj } from '@storybook/vue3';
// @ts-expect-error: type declarations are broken on the library
import { withActions } from '@storybook/addon-actions/decorator';
import Button from './Button.vue';

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  decorators: [withActions],
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
};

export default meta;

const BaseStory: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args" />',
  }),
};

export const Primary: Story = { ...BaseStory, args: { text: 'Button' } };
