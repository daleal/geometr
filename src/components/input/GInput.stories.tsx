import type { Meta, StoryObj } from '@storybook/vue3';
import { GApplication } from '@/components/application';
import { GInput } from './index';

// Auxiliar Types
type Story = StoryObj<typeof GInput>;

// Meta
const meta: Meta<typeof GInput> = {
  title: 'components/GInput',
  component: GInput,
  parameters: { controls: { sort: 'requiredFirst' } },
};

export default meta;

// Base Stories
const Base: Story = {
  parameters: { layout: 'fullscreen' },
  render: (args) => (
    <GApplication>
      <div>
        <GInput {...args} />
      </div>
    </GApplication>
  ),
};

// Exported Stories
export const LabelAndPlaceholder: Story = {
  ...Base,
  args: {
    modelValue: '',
    label: 'Label',
    placeholder: 'This is a placeholder',
  },
};

export const OnlyPlaceholder: Story = {
  ...Base,
  args: {
    modelValue: '',
    placeholder: 'This is a placeholder',
  },
};

export const OnlyLabel: Story = {
  ...Base,
  args: {
    modelValue: '',
    label: 'Label',
  },
};
