import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    vue({ script: { defineModel: true } }),
    vueJsx(),
    dts({
      staticImport: true,
      cleanVueFileName: true,
      tsconfigPath: './tsconfig.build.json',
    }),
  ],
  build: {
    lib: {
      name: 'geometr',
      entry: {
        main: resolve(__dirname, 'src', 'main.ts'),
        'components/main': resolve(__dirname, 'src', 'components', 'main.ts'),
        'composables/main': resolve(__dirname, 'src', 'composables', 'main.ts'),
        style: resolve(__dirname, 'src', 'styles.ts'),
      },
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
