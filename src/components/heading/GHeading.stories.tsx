import type { Meta, StoryObj } from '@storybook/vue3';
import { GApplication } from '@/components/application';
import { GSeparator } from '@/components/separator';
import { headingTypes } from './types';
import { GHeading } from './index';

// Auxiliar Types
type Story = StoryObj<typeof GHeading>;

// Meta
const meta = {
  title: 'components/GHeading',
  component: GHeading,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    type: { options: headingTypes },
  },
} satisfies Meta<typeof GHeading>;

export default meta;

// Exported Stories
export const DefaultHeading = {
  render: () => (
    <GApplication>
      <GHeading>Geometr default heading (H3)</GHeading>
    </GApplication>
  ),
} satisfies Story;

export const Headings = {
  render: () => (
    <GApplication>
      <GHeading type="h1">Geometr H1 heading</GHeading>
      <GSeparator height={2} />
      <GHeading type="h2">Geometr H2 heading</GHeading>
      <GSeparator height={2} />
      <GHeading type="h3">Geometr H3 heading</GHeading>
      <GSeparator height={2} />
      <GHeading type="h4">Geometr H4 heading</GHeading>
      <GSeparator height={2} />
      <GHeading type="h5">Geometr H5 heading</GHeading>
      <GSeparator height={2} />
      <GHeading type="h6">Geometr H6 heading</GHeading>
    </GApplication>
  ),
} satisfies Story;
