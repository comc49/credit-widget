import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [
    svelte({
      compilerOptions: {
        customElement: true, // compile components as Web Components
      },
    }),
  ],
  build: {
    lib: {
      entry: 'src/main.ts',     // the file that registers the elements
      formats: ['es'],
      fileName: 'credit-widget', // outputs dist/credit-widget.js
    },
  },
});