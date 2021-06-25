import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home.vue'
import Index from '../pages/index.vue'
Vue.use(Router)
export default new Router({
    routes:[
        {
            path:'/',
            name:'home',
            component:Home,
            redirect:'index',
            children:[
                {
                    path:'index',
                    name:'index',
                    component:Index,
                },
                {
                    path:'product/:id',
                    name:'product',
                    component:()=>import ('../pages/Product.vue')
                },
                {
                    path:'detail/:id',
                    name:'detail',
                    component:()=>import ('../pages/Detail.vue'),
                }
            ]
        },
        {
            path:'/cart',
            name:'cart',
            component:()=>import ('../pages/Cart.vue'),
        },
        {
            path:'/login',
            name:'login',
            component:()=>import ('../pages/Login.vue')
        },
        {
            path:'/order',
            name:'order',
            component:()=>import ('../pages/Order.vue'),
            children:[
                {
                    path:'list',
                    name:'order-list',
                    component:()=>import ('../pages/OrderList.vue')
                },
                {
                    path:'confirm',
                    name:'order-confirm',
                    component:()=>import ('../pages/OrderConfirm.vue')
                },
                {
                    path:'pay',
                    name:'order-pay',
                    component:()=>import ('../pages/OrderPay.vue')
                },
                {
                    path:'alipay',
                    name:'alipay',
                    component:()=>import ('../pages/AliPay.vue')
                }
            ]
        }
    ]
})