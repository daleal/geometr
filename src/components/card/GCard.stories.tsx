import type { Meta, StoryObj } from '@storybook/vue3';
import { GApplication } from '@/components/application';
import { GButton } from '@/components/button';
import { GCard } from './index';

// Auxiliar Types
type Story = StoryObj<typeof GCard>;

// Meta
const meta = {
  title: 'components/GCard',
  component: GCard,
  parameters: { controls: { sort: 'requiredFirst' } },
} satisfies Meta<typeof GCard>;

export default meta;

// Exported Stories
export const DefaultProp = {
  parameters: { layout: 'fullscreen' },
  render: (args) => (
    <GApplication>
      <GCard {...args}>
        This card only has the default prop
      </GCard>
    </GApplication>
  ),
} satisfies Story;

export const HeaderAndContent = {
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
} satisfies Story;

export const OnlyHeader = {
  parameters: { layout: 'fullscreen' },
  render: (args) => (
    <GApplication>
      <GCard {...args}>
        {{
          header: () => <>This is the title</>,
        }}
      </GCard>
    </GApplication>
  ),
} satisfies Story;

export const HeaderAndSubtitle = {
  parameters: { layout: 'fullscreen' },
  render: (args) => (
    <GApplication>
      <GCard {...args}>
        {{
          header: () => <>This is the title</>,
          subtitle: () => <>This is a subtitle</>,
        }}
      </GCard>
    </GApplication>
  ),
} satisfies Story;

export const HeaderSubtitleAndContent = {
  parameters: { layout: 'fullscreen' },
  render: (args) => (
    <GApplication>
      <GCard {...args}>
        {{
          header: () => <>This is the title</>,
          subtitle: () => <>This is a subtitle</>,
          content: () => <>This is the content of the card. It usually is quite large.</>,
        }}
      </GCard>
    </GApplication>
  ),
} satisfies Story;

export const HeaderSubtitleAndActions = {
  parameters: { layout: 'fullscreen' },
  render: (args) => (
    <GApplication>
      <GCard {...args}>
        {{
          header: () => <>This is the title</>,
          subtitle: () => <>This is a subtitle</>,
          actions: () => <>
            <GButton color="primary">Nais</GButton>
            <GButton color="secondary">Double Nais</GButton>
          </>,
        }}
      </GCard>
    </GApplication>
  ),
} satisfies Story;

export const HeaderSubtitleContentAndActions = {
  parameters: { layout: 'fullscreen' },
  render: (args) => (
    <GApplication>
      <GCard {...args}>
        {{
          header: () => <>This is the title</>,
          subtitle: () => <>This is a subtitle</>,
          content: () => <>This is the content of the card. It usually is quite large.</>,
          actions: () => <>
            <GButton color="primary">Nais</GButton>
            <GButton color="secondary">Double Nais</GButton>
          </>,
        }}
      </GCard>
    </GApplication>
  ),
} satisfies Story;

export const OnlyActions = {
  parameters: { layout: 'fullscreen' },
  render: (args) => (
    <GApplication>
      <GCard {...args}>
        {{
          actions: () => <>
            <GButton color="primary">Nais</GButton>
            <GButton color="secondary">Double Nais</GButton>
          </>,
        }}
      </GCard>
    </GApplication>
  ),
} satisfies Story;

export const MultipleCards = {
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
} satisfies Story;
