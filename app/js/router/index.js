import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter);

function resolveView(path, name, component,
                     keepAlive = false, children = null) {
    return {
        path,
        name,
        component: () => {
            return component;
        },
        meta: {
            keepAlive,
        },
        children,
    }
}

export default new VueRouter({
    mode: "hash",
    base: __dirname,
    routes: [
        resolveView("/login", '/Login', import('../pages/Login.vue')),// /login路径，路由到登录组件
        {
            path: "/",
            name: "home",
            redirect: "/index/login",
            component: () => import('../pages/Layout.vue'),// 其它所有组件都是 Layout的子组件
            children: [
                resolveView("/index/login", "/Login", import('../pages/Login.vue')),
                resolveView("/item/category", '/item/Category', import('../pages/home/index.vue')),
                resolveView("/item/brand", '/item/Brand', import('../pages/Login.vue')),
                resolveView("/item/list", '/item/Goods', import('../pages/home/index.vue')),
                resolveView("/item/specification", '/item/specification/Specification', import('../pages/Login.vue')),
                resolveView("/user/statistics", '/item/Statistics', import('../pages/home/index.vue')),
                resolveView("/trade/promotion", '/trade/Promotion', import('../pages/Login.vue'))
            ]
        },
    ]
});



