import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VitePluginVite3DirList from 'vite-plugin-vite3-dir-list'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true
  },
  plugins: [VitePluginVite3DirList(), vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
