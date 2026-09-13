import path from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // Lets any component do `@use 'tokens' as t;` instead of relative
        // `../../../styles/tokens` paths that break when files move.
        loadPaths: [path.resolve(import.meta.dirname, 'src/styles')],
      },
    },
  },
})
