import { ref } from 'vue';

type Options = {
  default: boolean;
};

export const useModal = (options: Options = { default: false }) => {
  const opened = ref(options.default);

  const open = () => {
    opened.value = true;
  };

  const close = () => {
    opened.value = false;
  };

  const toggle = () => {
    opened.value = !opened.value;
  };

  return {
    opened,
    open,
    close,
    toggle,
  };
};
