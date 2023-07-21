import type { Meta, StoryObj } from '@storybook/vue3';
import { GApplication } from '@/components/application';
import { GInput } from './index';

// Auxiliar Types
type Story = StoryObj<typeof GInput>;

// Meta
const meta = {
  title: 'components/GInput',
  component: GInput,
  parameters: { controls: { sort: 'requiredFirst' } },
} satisfies Meta<typeof GInput>;

export default meta;

// Base Stories
const Base = {
  parameters: { layout: 'fullscreen' },
  render: (args) => (
    <GApplication>
      <div>
        <GInput {...args} />
      </div>
    </GApplication>
  ),
} satisfies Story;

// Exported Stories
export const LabelAndPlaceholder = {
  ...Base,
  args: {
    modelValue: '',
    label: 'Label',
    placeholder: 'This is a placeholder',
  },
} satisfies Story;

export const OnlyPlaceholder = {
  ...Base,
  args: {
    modelValue: '',
    placeholder: 'This is a placeholder',
  },
} satisfies Story;

export const OnlyLabel = {
  ...Base,
  args: {
    modelValue: '',
    label: 'Label',
  },
} satisfies Story;
