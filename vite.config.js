import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // vueDevTools(),
    // viteMockServe({
    //   supportTs:false,
    //   logger: false,
    //   mockPath: "./mock/"   // 注意：此时的 mockPath 地址是真正安装的 mock 文件夹的地址;
    // })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  base:'/vue-edufront/',
})
