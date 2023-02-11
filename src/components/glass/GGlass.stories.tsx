import type { Meta, StoryObj } from '@storybook/vue3';
import { GApplication } from '@/components/application';
import { GGlass } from './index';

// Auxiliar Types
type Story = StoryObj<typeof GGlass>;

// Meta
const meta: Meta<typeof GGlass> = {
  title: 'components/GGlass',
  component: GGlass,
  parameters: { controls: { sort: 'requiredFirst' } },
};

export default meta;

// Exported Stories
export const Glass: Story = {
  parameters: { layout: 'fullscreen' },
  render: (args) => (
    <GApplication style={{ display: 'block', padding: '1rem' }} >
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
};
