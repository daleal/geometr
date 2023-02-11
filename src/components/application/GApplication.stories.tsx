import type { Meta, StoryObj } from '@storybook/vue3';
import { GApplication } from './index';

// Auxiliar Types
type Story = StoryObj<typeof GApplication>;

// Meta
const meta: Meta<typeof GApplication> = {
  title: 'components/GApplication',
  component: GApplication,
  parameters: { controls: { sort: 'requiredFirst' } },
};

export default meta;

// Exported Stories
export const ApplicationBase: Story = {
  parameters: { layout: 'fullscreen' },
  render: (args) => (
    <GApplication {...args} style={{ padding: '1rem' }} >
      This application has content
    </GApplication>
  ),
};
