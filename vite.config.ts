import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";
//elementplus按需引入
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";


// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname,".","src"), //src别名配置
      'vue-i18n' : 'vue-i18n/dist/vue-i18n.cjs.js',//控制台警告
    },
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: "http://dev.bewatec.com.cn:8000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },

  },
  build: {
    assetsInlineLimit: 0,
    outDir: "dist", //输出文件名
    assetsDir: "assets", //指定静态资源存放路径
    rollupOptions: {
      output: {
        chunkFileNames: "js/[name]-[hash].js", //js文件输出路径
        entryFileNames: "js/[name]-[hash].js",
        assetFileNames: "[ext]/[name]-[hash].[ext]",
      },
    },
    // terserOptions: {
    //   compress: {
    //     drop_console: true
    //   },
    // },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/element/index.scss" as *;`,
      }
    },
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [
        ElementPlusResolver({
          importStyle: "sass"
        })
      ],
    }),
    // use unplugin-vue-components
    Components({
      resolvers: [
        ElementPlusResolver({
          importStyle: "sass"
        }),
      ],
    }),
  ],
})
