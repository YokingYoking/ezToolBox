export default
    {
        path: '/user',
        component: ()=> import('@/views/layout'),
        children: [
            {
                path: '/',
                name: 'user',
                meta: {
                    tabTitle: '用户',
                    icon: 'friends',
                },
                component: () => import('@/views/user'),
            }
        ]
    }