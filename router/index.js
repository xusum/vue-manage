import Vue from "vue"
import VueRouter from "vue-router"
// import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Main',
        component: () => import ('../views/Main.vue'),
        redirect: '/home',
        children:[
            {
                path:'/home',
                name:'home',
                component: () => import('../views/home')
            },
            {
                path: '/user',
                name: 'user',
                component: () => import('../views/User')
            },
            {
                path: '/mall',
                name: 'mall',
                component: () => import('../views/mall/index.vue')
            },
            {
                path: '/pageOne',
                name: 'page1',
                component: () => import('../views/other/pageOne.vue')
            },
            {
                path: '/pageTwo',
                name: 'page2',
                component: () => import('../views/other/pageTwo.vue')
            },

        ]
    },
   
]


const router = new VueRouter({
    mode: 'history',
    routes
})

export default router



// 解决报错 通俗来讲就是多次进入了同一个path （把push在router原型上二次封装一下）
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
   if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
   return originalPush.call(this, location).catch(err => err)
}
