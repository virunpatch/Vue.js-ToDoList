import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// แทนที่ 'Vue.js-ToDoList' ด้วยชื่อ Repository ของคุณ
const repoName = 'Vue.js-ToDoList'; 

// https://vite.dev/config/
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