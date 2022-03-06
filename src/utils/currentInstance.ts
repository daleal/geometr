import { getCurrentInstance as vueGetCurrentInstance } from 'vue';
import { toKebabCase } from '@/utils/helpers';

export const getCurrentInstance = (name: string, message?: string) => {
  const instance = vueGetCurrentInstance();

  if (!instance) {
    throw new Error(`[Geometr] ${name} ${message || 'must be called from inside a setup function'}`);
  }

  return instance;
};

export const getCurrentInstanceName = (name = 'composable') => toKebabCase(getCurrentInstance(name).type?.name);
