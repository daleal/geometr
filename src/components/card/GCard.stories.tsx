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
export const DefaultProp: Story = {
  parameters: { layout: 'fullscreen' },
  render: (args) => (
    <GApplication>
      <GCard {...args}>
        This card only has the default prop
      </GCard>
    </GApplication>
  ),
};

export const HeaderAndContent: Story = {
  parameters: { layout: 'fullscreen' },
  render: (args) => (
    <GApplication>
      <GCard {...args}>
        {{
          header: () => <>This is the title</>,
          content: () => <>This is the content of the card. It usually is quite large.</>,
        }}
      </GCard>
    </GApplication>
  ),
};

export const MultipleCards: Story = {
  parameters: { layout: 'fullscreen' },
  render: (args) => (
    <GApplication>
      {
        [...Array(12)].map((_, index) => (
          <GCard {...args} key={index} style={{ 'margin-bottom': '1rem' }} >
            {{
              header: () => <>Card number {index + 1}</>,
              content: () => <>This is the content of the card. It usually is quite large.</>,
            }}
          </GCard>
        ))
      }
    </GApplication>
  ),
};
