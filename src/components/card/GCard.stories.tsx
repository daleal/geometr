import type { Meta, StoryObj } from '@storybook/vue3';
import { GApplication } from '@/components/application';
import { GCard } from './index';

// Auxiliar Types
type Story = StoryObj<typeof GCard>;

// Meta
const meta: Meta<typeof GCard> = {
  title: 'components/GCard',
  component: GCard,
  parameters: { controls: { sort: 'requiredFirst' } },
};

export default meta;

// Exported Stories
export const HeaderAndContent: Story = {
  parameters: { layout: 'fullscreen' },
  render: (args) => (
    <GApplication style={{ padding: '1rem' }} >
      <GCard {...args}>
        {{
          header: () => <>This is the title</>,
          content: () => <>This is the content of the card. It usually is quite large.</>,
        }}
      </GCard>
    </GApplication>
  ),
};

export const DefaultProp: Story = {
  parameters: { layout: 'fullscreen' },
  render: (args) => (
    <GApplication style={{ padding: '1rem' }} >
      <GCard {...args}>
        This card only has a content prop
      </GCard>
    </GApplication>
  ),
};
