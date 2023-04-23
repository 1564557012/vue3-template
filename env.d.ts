/// <reference types="vite/client" />
declare const __BUILD_DATE__: string
declare module '*.vue' {
  // @引入.vue文件找不到的问题 tsconfog.json的include包含此文件
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<{}, {}, any>
  export default component
}
