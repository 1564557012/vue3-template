import { createI18n } from "vue-i18n";
import messages from "./package";
import { store } from '@/store/index';
import { useAppStore } from "@/store/modules/appStore";
const appConfig = useAppStore(store)

export const i18n = createI18n({
  legacy: false,         // 使用 Composition API 模式，则需要将其设置为false
  globalInjection: true, //全局生效$t
  locale: appConfig.locale, // 默认zh-CN
  fallbackLocale: 'zh-CN',//没有英文的时候默认中文语言
  messages               //ES6解构
})





