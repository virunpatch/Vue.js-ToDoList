import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

const repoName = 'Vue.js-ToDoList'; 

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? `/${repoName}/` : '/', // <--- เพิ่มบรรทัดนี้
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})