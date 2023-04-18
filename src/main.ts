import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import { setupStore } from '@/store'
// import { setupSvgIcon } from '@/components/Icon'
import { i18n } from './lang'
import '@/assets/iconfont/iconfont.js'
import { setupIcon } from '@/components/Icon/index'

const app = createApp(App);
app.use(router);
setupStore(app);
setupIcon(app);
app.use(i18n);
app.mount('#app');
