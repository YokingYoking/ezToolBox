import VueRouter from 'vue-router'
import Vue from 'vue'
import dictionary from '@/router/routes/dictionary'
import homepage from '@/router/routes/homepage'
import user from '@/router/routes/user'

Vue.use(VueRouter)

export const routes = [
    {
      path: '/',
      redirect: '/homepage',
        hidden: true,
      component: ()=> import('@/views/layout')
    },
    homepage,
    dictionary,
    user,
    {
        path: '*',
        hidden: true,
        component: () => import('@/views/404')
    },
]

export default new VueRouter({
    routes
})