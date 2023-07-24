import type { Meta, StoryObj } from '@storybook/vue3';
import { GApplication } from '@/components/application';
import { GGlass } from './index';

// Auxiliar Types
type Story = StoryObj<typeof GGlass>;

// Meta
const meta = {
  title: 'components/GGlass',
  component: GGlass,
  parameters: { controls: { sort: 'requiredFirst' } },
} satisfies Meta<typeof GGlass>;

export default meta;

// Base Stories
const BaseStory = () => ({
  render: (args) => (
    <GApplication style={{ display: 'block' }} >
      <GGlass {...args} style={{ display: 'inline-flex', 'flex-direction': 'column', color: '#7ed421' }} >
        <div style={{ padding: '15px' }}>
          This is a text
        </div>
        <div style={{ padding: '15px' }}>
          This is another text
        </div>
      </GGlass>
    </GApplication>
  ),
} satisfies Story);

// Exported Stories
export const Glass = {
  ...BaseStory(),
  args: {
    borderRadius: 1,
  },
} satisfies Story;

export const SquaredGlass = {
  ...BaseStory(),
  args: {
    borderRadius: 0,
  },
};
