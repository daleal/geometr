import { use, registerComponent } from '@/utils/plugins';
import Button from './Button.vue';

const Plugin = {
  install(Vue) {
    registerComponent(Vue, Button);
  },
};

use(Plugin);

export default Plugin;

export {
  Button as GButton,
};
