import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

export default defineConfig({
  plugins: [
    vue({ script: { defineModel: true } }),
    vueJsx(),
  ],
  build: {
    lib: {
      entry: [
        resolve(__dirname, 'src', 'main.ts'),
        resolve(__dirname, 'src', 'components/index.ts'),
        resolve(__dirname, 'src', 'composables/index.ts'),
        resolve(__dirname, 'src', 'styles.ts'),
      ],
      name: 'geometr',
      fileName: (format, entryName) => `${entryName}.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
    sourcemap: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
