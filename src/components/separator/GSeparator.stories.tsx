import type { Meta, StoryObj } from '@storybook/vue3';
import { GApplication } from '@/components/application';
import { GSeparator } from './index';

// Auxiliar Types
type Story = StoryObj<typeof GSeparator>;

// Meta
const meta = {
  title: 'components/GSeparator',
  component: GSeparator,
  parameters: { controls: { sort: 'requiredFirst' } },
} satisfies Meta<typeof GSeparator>;

export default meta;

// Base Stories
const BaseStory = (height: number) => ({
  parameters: { layout: 'fullscreen' },
  render: (args) => (
    <GApplication>
      <div>This is some text!</div>
      <GSeparator {...args} height={height} />
      <div>This is some more text!</div>
    </GApplication>
  ),
} satisfies Story);

// Exported Stories
export const NoSeparator = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <GApplication>
      <div>This is some text!</div>
      <div>This is some more text!</div>
    </GApplication>
  ),
} satisfies Story;
export const OneSeparator = BaseStory(1) satisfies Story;
export const TwoSeparator = BaseStory(2) satisfies Story;
export const ThreeSeparator = BaseStory(3) satisfies Story;
export const FourSeparator = BaseStory(4) satisfies Story;
export const TenSeparator = BaseStory(10) satisfies Story;
