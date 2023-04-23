import { App } from 'vue';
import Icon from './index.vue';

export function setupIcon(app: App<Element>) {
	app.component('Icon', Icon);
}
