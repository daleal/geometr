import { computed } from 'vue';
import { propsFactory } from '@/utils/propsFactory';
import { getCurrentInstanceName } from '@/utils/currentInstance';

const availableSizes = ['x-small', 'small', 'default', 'large', 'x-large'];

export interface SizeProps {
  size?: string
}

export const makeSizeProps = propsFactory({
  size: {
    type: String,
    default: 'default',
  },
});

export const useSize = (
  props: SizeProps,
  name = getCurrentInstanceName(),
) => {
  const sizeClasses = computed(
    () => (
      availableSizes.includes(props.size as string)
        ? `${name}--size-${props.size}`
        : null
    ),
  );

  return { sizeClasses };
};
