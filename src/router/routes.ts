import type { RouteRecordRaw } from 'vue-router';

export const routes: Array<RouteRecordRaw> = [
	{
		path: '/home',
		name: 'home',
		component: () => import('@/views/home/Home.vue'),
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('@/views/login/Login.vue'),
	},
	{
		path: '/', // 重定向
		redirect: '/login',
	},
	// { path: '/:path(.*)', component: NotFound }//404页面,
];
