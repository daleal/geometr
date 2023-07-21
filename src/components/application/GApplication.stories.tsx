import type { Meta, StoryObj } from '@storybook/vue3';
import { GApplication } from './index';

// Auxiliar Types
type Story = StoryObj<typeof GApplication>;

// Meta
const meta = {
  title: 'components/GApplication',
  component: GApplication,
  parameters: { controls: { sort: 'requiredFirst' } },
} satisfies Meta<typeof GApplication>;

export default meta;

// Exported Stories
export const ApplicationBase = {
  parameters: { layout: 'fullscreen' },
  render: (args) => (
    <GApplication {...args} >
      This application has content
    </GApplication>
  ),
} satisfies Story;
