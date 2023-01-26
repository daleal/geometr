import { buildStoryFactory } from '@/utils/stories';
import Button from './Button.vue';

export default {
  title: 'Button',
  component: Button,
};

const storyFactory = buildStoryFactory(Button, '<Button v-bind="args" />');

export const Primary = storyFactory({ text: 'NAIS' });
