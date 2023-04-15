import {createRouter,createWebHashHistory} from 'vue-router'
import {routes} from './routes'
 const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
    sensitive: true,
    strict: false,
  })
  export default router