import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/main-page',
            component: () => import('@/page/MainPage/MainPage.vue')
        },
        {
            path: '/:pathMatch(.*)*', name: 'NotFound',
            component: () => import('@/page/MainPage/MainPage.vue')
        }
    ]
})

router.beforeEach(async (to, from, next) => {
    if (to.meta.middleware) {
        const middleware = Array.isArray(to.meta.middleware) ? to.meta.middleware : [to.meta.middleware]
        const context = { to, from, next, store: authStore, router }
        const nextMiddleware = nextFactory(context, middleware, 1)

        return middleware[0]({ ...context, next: nextMiddleware })
    }

    return next()
})

export default router