import type { App } from 'vue';
import { createPinia } from 'pinia';

export const store = createPinia();

// 全局注册 store
export function setupStore(app: App<Element>) {
  app.use(store);
}