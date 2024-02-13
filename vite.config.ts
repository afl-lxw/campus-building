import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // 其他插件...
 
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    host: '0.0.0.0'
  },
  css: {
    preprocessorOptions: {
      less: {
        // additionalData: `@import "your-theme-file-path";`, // 可选，引入自定义 theme 文件
        javascriptEnabled: true, // 开启 Less 的 JavaScript 功能
      },
    },
  },
})
