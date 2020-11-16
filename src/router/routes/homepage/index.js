export default
    {
        path: '/homepage',
        component: ()=> import('@/views/layout'),
        children: [
            {
                path: '/',
                name: 'homepage',
                meta: {
                    tabTitle: '主页',
                    icon: 'wap-home',
                },
                component: () => import('@/views/homepage'),
            }
        ]
    }