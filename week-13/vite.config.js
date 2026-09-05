import { defineConfig } from 'vite';
import { resolve } from 'node:path';
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve('index.html'),
        favorites: resolve('task-1/index.html'),
        bookmark: resolve('task-2/index.html'),
        shopify: resolve('task-3/index.html'),
      },
    },
  },
});
