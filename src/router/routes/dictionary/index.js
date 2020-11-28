export default
    {
        path: '/dictionary',
        component: ()=> import('@/views/layout'),
        children: [
            {
                path: '/',
                redirect: 'list',
                name: 'dictionary',
                meta: {
                    tabTitle: '字典',
                    icon: 'column',
                },
                component: () => import('@/views/dictionary'),
                children: [
                    {
                        path: 'list',
                        name: 'dictList',
                        component: ()=> import('@/views/dictionary/components/list'),
                    },
                    {
                        path: 'add',
                        name: 'addDict',
                        component: ()=> import('@/views/dictionary/components/addDict'),
                    },
                    {
                        path: 'edit',
                        name: 'editDict',
                        component: () => import('@/views/dictionary/components/addDict')
                    }
                ]
            },
        ]
    }