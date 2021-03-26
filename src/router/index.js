import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            // component: function() {return ' '@/components/layout'' },
            component: () => import('@/components/layout'),
            children: [
                {
                    path: '',
                    component: () => import('@/views/auth/login'),

                }
            ]
        },
    ]
})

// 单点退出用
// 导入vuex状态对象store ++++++
import store from '@/store'

// 路由拦截器 ++++++
router.beforeEach((to, from, next) => { // this.$route
    if (to.path === '/logout') {
        // 退出
        store.dispatch('UserLogout', to.query.redirectURL)
    } else {
        next()
    }
})


export default router