import type { Meta, StoryObj } from '@storybook/vue3';
import { GApplication } from '@/components/application';
import { GSeparator } from '@/components/separator';
import { textTags, textTypes } from './types';
import { GText } from './index';

// Auxiliar Types
type Story = StoryObj<typeof GText>;

// Meta
const meta = {
  title: 'components/GText',
  component: GText,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    is: { options: textTags },
    type: { options: textTypes },
  },
} satisfies Meta<typeof GText>;

export default meta;

// Exported Stories
export const DefaultText = {
  render: () => (
    <GApplication>
      <GText>Geometr default text (body-1)</GText>
    </GApplication>
  ),
} satisfies Story;

export const StandardTexts = {
  render: () => (
    <GApplication>
      <GText type="subtitle-1">Geometr Subtitle 1 text</GText>
      <GSeparator />
      <GText type="subtitle-2">Geometr Subtitle 2 text</GText>
      <GSeparator />
      <GText type="body-1">Geometr Body 1 text</GText>
      <GSeparator />
      <GText type="body-2">Geometr Body 2 text</GText>
    </GApplication>
  ),
} satisfies Story;

export const TextVariations = {
  render: () => (
    <GApplication>
      <GText is="p">Geometr Paragraph</GText>
      <GSeparator />
      <GText is="span">Geometr Span</GText>
      <GSeparator />
      <GText is="b">Geometr Bold</GText>
      <GSeparator />
      <GText is="i">Geometr Italic</GText>
      <GSeparator />
      <GText is="u">Geometr Underline</GText>
      <GSeparator />
      <GText is="kbd">Geometr Ctrl + C</GText>
      <GSeparator />
      <GText is="s">Geometr Strikethrough</GText>
      <GSeparator />
    </GApplication>
  ),
} satisfies Story;
