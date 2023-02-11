import { getCurrentInstance as vueGetCurrentInstance } from 'vue';

export const getCurrentInstance = (name: string) => {
  const instance = vueGetCurrentInstance();

  if (!instance) {
    throw new Error(`[Geometr] ${name} must be called from inside a setup function`);
  }

  return instance;
};
