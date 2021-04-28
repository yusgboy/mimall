import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home.vue'
import Index from '../pages/index.vue'
import Product from '../pages/Product.vue'
import Detail from '../pages/Detail.vue'
import Cart from '../pages/Cart.vue'
import Order from '../pages/Order.vue'
import OrderList from '../pages/OrderList.vue'
import OrderConfirm from '../pages/OrderConfirm.vue'
import OrderPay from '../pages/OrderPay.vue'
import AliPay from '../pages/AliPay.vue'
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
                    component:Product,
                },
                {
                    path:'detail/:id',
                    name:'detail',
                    component:Detail,
                }
            ]
        },
        {
            path:'/cart',
            name:'cart',
            component:Cart,
        },
        {
            path:'/order',
            name:'order',
            component:Order,
            children:[
                {
                    path:'list',
                    name:'order-list',
                    component:OrderList
                },
                {
                    path:'confirm',
                    name:'order-confirm',
                    component:OrderConfirm
                },
                {
                    path:'pay',
                    name:'order-pay',
                    component:OrderPay
                },
                {
                    path:'alipay',
                    name:'alipay',
                    component:AliPay
                }
            ]
        }
    ]
})