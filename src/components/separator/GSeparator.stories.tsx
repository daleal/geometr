import type { Meta, StoryObj } from '@storybook/vue3';
import { GApplication } from '@/components/application';
import { GSeparator } from './index';

// Auxiliar Types
type Story = StoryObj<typeof GSeparator>;

// Meta
const meta: Meta<typeof GSeparator> = {
  title: 'components/GSeparator',
  component: GSeparator,
  parameters: { controls: { sort: 'requiredFirst' } },
};

export default meta;

// Base Stories
const BaseStory = (height: number): Story => ({
  parameters: { layout: 'fullscreen' },
  render: (args) => (
    <GApplication>
      <div>This is some text!</div>
      <GSeparator {...args} height={height} />
      <div>This is some more text!</div>
    </GApplication>
  ),
});

// Exported Stories
export const NoSeparator: Story = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <GApplication>
      <div>This is some text!</div>
      <div>This is some more text!</div>
    </GApplication>
  ),
};
export const OneSeparator: Story = BaseStory(1);
export const TwoSeparator: Story = BaseStory(2);
export const ThreeSeparator: Story = BaseStory(3);
export const FourSeparator: Story = BaseStory(4);
export const TenSeparator: Story = BaseStory(10);
