import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
	{
		path: '/nurses',
		name: 'nurses',
		component: () => import('@/components/MyNurses.vue'),
	},
	{
		path: '/doctors',
		name: 'doctors',
		component: () => import('@/components/MyDoctors.vue'),
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

export default router
