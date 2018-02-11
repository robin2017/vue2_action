import Vue from 'vue';
import VueRouter from 'vue-router';

import Category from './../Category.vue'
import ShoppingCart from './../Cart.vue'
import Me from './../Me.vue'
import BookDetail from "./../books/Detail.vue"
import Main from './../Main.vue'

const Home = resolve => require(['./../Home.vue'], resolve)


Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    base: __dirname,
    linkActiveClass: "active",
    routes: [
        {
            name: 'Main', path: '/', component: Main, children: [
            {name: 'Home', path: '/', component: Home},
            {name: 'Categories', path: 'categories', component: Category},
            {name: 'ShoppingCart', path: 'shopping-cart', component: ShoppingCart},
            {name: 'Me', path: 'me', component: Me},
        ]
        },
        {name: 'BookDetail', path: '/books/:id', component: BookDetail}
    ]
})