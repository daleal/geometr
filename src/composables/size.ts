import { computed } from 'vue';
import { propsFactory } from '@/utils/propsFactory';

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

export const useSize = (props: SizeProps, name: string) => {
  const sizeClasses = computed(
    () => (
      availableSizes.includes(props.size as string)
        ? `${name}--size-${props.size}`
        : null
    ),
  );

  return { sizeClasses };
};
