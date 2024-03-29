import type { Meta, StoryObj } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';
import { GApplication } from '@/components/application';
import { colors } from './types';
import { GButton } from './index';

// Auxiliar Types
type Story = StoryObj<typeof GButton>;

// Meta
const meta = {
  title: 'components/GButton',
  component: GButton,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    color: { options: colors },
  },
} satisfies Meta<typeof GButton>;

export default meta;

// Actions
const onClickAction = action('click');

// Base Stories
const BaseStory = (slots: { default?: () => JSX.Element, icon?: () => JSX.Element }) => ({
  render: (args) => (
    <GApplication>
      <div>
        {/* @ts-expect-error: missmatch on component typing between .vue and .tsx */}
        <GButton {...args} onClick={onClickAction}>
          { slots }
        </GButton>
      </div>
    </GApplication>
  ),
} satisfies Story);

// Exported Stories
export const TextOnlyPrimary = {
  ...BaseStory({
    default: () => <>Button</>,
  }),
  args: {
    color: 'primary',
  },
} satisfies Story;

export const TextOnlySecondary = {
  ...BaseStory({
    default: () => <>Button</>,
  }),
  args: {
    color: 'secondary',
  },
} satisfies Story;

export const TextAndIcon = {
  ...BaseStory({
    default: () => <>Button</>,
    icon: () => <span class="mdi mdi-close-thick" />,
  }),
  args: {
    color: 'primary',
  },
} satisfies Story;

export const IconOnly = {
  ...BaseStory({
    icon: () => <span class="mdi mdi-close-thick" />,
  }),
  args: {
    color: 'primary',
  },
} satisfies Story;
