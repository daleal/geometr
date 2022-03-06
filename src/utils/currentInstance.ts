import { getCurrentInstance as vueGetCurrentInstance } from 'vue';
import { toKebabCase } from '@/utils/helpers';

export function getCurrentInstance(name: string, message?: string) {
  const instance = vueGetCurrentInstance();

  if (!instance) {
    throw new Error(`[Geometr] ${name} ${message || 'must be called from inside a setup function'}`);
  }

  return instance;
}

export function getCurrentInstanceName(name = 'composable') {
  return toKebabCase(getCurrentInstance(name).type?.name);
}
