import { buildTemplate } from '@/utils/stories';
import Button from './Button.vue';

export default {
  title: 'Button',
  component: Button,
};

const templateFactory = buildTemplate(Button, '<Button v-bind="args" />');

export const Primary = templateFactory({ text: 'NAIS' });
