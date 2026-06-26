import { createRouter, createWebHistory } from 'vue-router'
import PageCalc from '../views/PageCalc.vue'
import PageTable from '../views/PageTable.vue'
import PageFuncs from '../views/PageFuncs.vue'

const routes = [
  {
    path: '/',
    name: 'Calc',
    component: PageCalc,
    meta: {
      title: 'Калькулятор - Socionics'
    }
  },
  {
    path: '/table',
    name: 'Table',
    component: PageTable,
    meta: {
      title: 'Таблица - Socionics'
    }
  },
  {
    path: '/funcs',
    name: 'Funcs',
    component: PageFuncs,
    meta: {
      title: 'Функции - Socionics'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Socionics PWA'
  next()
})

export default router
