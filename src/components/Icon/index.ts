import Icon from './index.vue'
import { App } from 'vue'
 
export function setupIcon(app:App<Element>) {
  app.component('Icon', Icon)
}