import Vue from 'vue'
import Router from 'vue-router'
/* Layout */
import Layout from './views/layout/Layout'

Vue.use(Router)

export const constantRouterMap = [
    { path: '/login', component: () => import('@/views/login/index'), hidden: true },
    { path: '/404', component: () => import('@/views/404'), hidden: true },

    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        name: 'Dashboard',
        hidden: true,
        children: [{
            path: 'dashboard',
            component: () => import('@/views/dashboard/index')
        }]
    },

    {
        path: '/dashboard',
        component: Layout,
        redirect: '/dashboard/index',
        name: 'Example',
        // meta: { title: 'Example', icon: 'example' },

        // children: [
        //     {
        //         path: 'table',
        //         name: 'Table',
        //         component: () => import('@/views/table/index'),
        //         meta: { title: 'Table', icon: 'icon-shoujitianchong' }
        //     },
        //     {
        //         path: 'tree',
        //         name: 'Tree',
        //         component: () => import('@/views/tree/index'),
        //         // meta: { title: 'Tree', icon: 'tree' }
        //         meta: { title: 'Tree', icon: 'icon-gengduotianchong' }
        //     }
        // ]
        children: [
            {
                path: 'index',
                name: 'Dashboard',
                meta: { title: 'Dashboard', icon: 'icon-fenleiorguangchangorqitatianchong' },
                component: () => import('@/views/dashboard/index'),
            },

        ]
    },
    {
        path: '/bills',
        name: 'Bill',
        component: Layout,
        children: [
            {
                path: 'index',
                name: 'Bills',
                meta: { title: 'Bills', icon: 'icon-shoujitianchong' },
                component: () => import('@/views/bills/index'),
            }
        ]
    },
    {
        path: '/bills',
        component: Layout,
        hidden: true,
        children: [{
            path: 'createbills',
            name: 'bills',
            component: () => import('@/views/bills/createbills'),
        }]
    },

    {
        path: '/products',
        name: 'Products',
        component: Layout,
        children: [
            {
                path: 'index',
                name: 'Products',
                meta: { title: 'Products', icon: 'icon-shoujitianchong' },
                component: () => import('@/views/products/index'),
            }
        ]
    },


    {
        path: '/users',
        component: Layout,
        children: [
            {
                path: 'index',
                name: 'Users',
                component: () => import('@/views/users/index'),
                meta: { title: 'Users', icon: 'icon-xinfengtianchong' }
            },

        ]

    },

    {
        path: '/users',
        component: Layout,
        hidden: true,
        children: [{
            path: '/users',
            name: 'create',
            component: () => import('@/views/users/create'),
        }]
    },
    {
        path: '/clients',
        component: Layout,
        hidden: true,
        children: [{
            path: '/clients/createclients',
            name: 'createclients',
            component: () => import('@/views/clients/createclients'),
        },
        {
            path: "/client-edit",
            name: "Client-Edit",
            component: () => import('@/views/clients/edit'),
        }
        ]
    }
    ,
    {
        path: '/received',
        component: Layout,
        children: [
            {
                path: 'index',
                name: 'Received',
                component: () => import('@/views/received/index'),
                meta: { title: 'Received Order', icon: 'icon-xinfengtianchong' }
            },

        ]
    },
    {
        path: '/expenses',
        component: Layout,
        children: [
            {
                path: 'index',
                name: 'Expenses',
                component: () => import('@/views/expenses/index'),
                meta: { title: 'Expenses', icon: 'icon-xinfengtianchong' }
            },

        ]
    },
    {
        path: '/expenses',
        component: Layout,
        hidden: true,
        children: [
            {
                path: 'createxpenses',
                name: 'expenses',
                component: () => import('@/views/expenses/createxpenses')
            },

        ]
    },
    {
        path: '/clients',
        component: Layout,
        children: [
            {
                path: 'index',
                name: 'Clients',
                component: () => import('@/views/clients/index'),
                meta: { title: 'Clients', icon: 'icon-xinfengtianchong' }
            },

        ]
    },
    



    // {
    //     path: '/nested',
    //     component: Layout,
    //     redirect: '/nested/menu1',
    //     name: 'nested',
    //     meta: {
    //         title: 'nested',
    //         icon: 'icon-wenbenbianjitianchong'
    //     },
    //     children: [
    //         {
    //             path: 'menu1',
    //             component: () => import('@/views/nested/menu1/index'), // Parent router-view
    //             name: 'menu1',
    //             meta: { title: 'menu1' },
    //             children: [
    //                 {
    //                     path: 'menu1-1',
    //                     component: () => import('@/views/nested/menu1/menu1-1'),
    //                     name: 'menu1-1',
    //                     meta: { title: 'menu1-1' }
    //                 },
    //                 {
    //                     path: 'menu1-2',
    //                     component: () => import('@/views/nested/menu1/menu1-2'),
    //                     name: 'menu1-2',
    //                     meta: { title: 'menu1-2' },
    //                     children: [
    //                         {
    //                             path: 'menu1-2-1',
    //                             component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
    //                             name: 'menu1-2-1',
    //                             meta: { title: 'menu1-2-1' }
    //                         },
    //                         {
    //                             path: 'menu1-2-2',
    //                             component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
    //                             name: 'menu1-2-2',
    //                             meta: { title: 'menu1-2-2' }
    //                         }
    //                     ]
    //                 },
    //                 {
    //                     path: 'menu1-3',
    //                     component: () => import('@/views/nested/menu1/menu1-3'),
    //                     name: 'menu1-3',
    //                     meta: { title: 'menu1-3' }
    //                 }
    //             ]
    //         },
    //         {
    //             path: 'menu2',
    //             component: () => import('@/views/nested/menu2/index'),
    //             meta: { title: 'menu2' }
    //         }
    //     ]
    // },

    { path: '*', redirect: '/404', hidden: true }
];
export default new Router({
    mode: "history",
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRouterMap
});
