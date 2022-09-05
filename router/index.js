import Vue from "vue"
import VueRouter from "vue-router"
// import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Main',
        component: () => import ('../views/Main.vue'),
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
            }
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
