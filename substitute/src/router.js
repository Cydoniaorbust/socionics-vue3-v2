import { createRouter, createWebHistory } from 'vue-router'

var routes = [
	{ path: '/calc', name: 'Calc', meta: { title: 'Калькулятор' } },
	{ path: '/table', name: 'Table', meta: { title: 'Таблица' } },
	{ path: '/funcs', name: 'Funcs', meta: { title: 'Функции' } },
	// { path: '/test', name: 'Test', meta: { title: 'Test' } },
	// { path: '/test2', name: 'Test2', meta: { title: 'Test2' } },
	// { path: '/game', name: 'Game2048', meta: { title: '2048' } },
	// { path: '/psychosophy', name: 'Psychosophy', meta: { title: 'Psychosophy' } },

	{ path: '/:catchAll(.*)', redirect: '/calc' },
]

routes.forEach(route => {
	if (route.name)
		route.component = () => import(`./pages/Page${route.name}.vue`)
})

const router = createRouter({
	// history: createWebHistory(process.env.BASE_URL),
	history: createWebHistory(),
	routes
})

router.afterEach((to/*, from*/) => {
	window.document.title = (to.meta.title || 'Unknown') + ' | Cyorbu(c)'
});

export default router
