import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000,
    open: '/index.html',
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "sass:math";`,
      },
    },
    devSourcemap: true,
  },
  // TypeScript configuration
  esbuild: {
    target: 'ES2020',
  },
});

