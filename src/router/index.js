import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/appointment-info',
        name: 'appointment information',
        component: () => import(/* webpackChunkName: "about" */ '../views/AppointmentInfo.vue')
    },
    {
        path: '/appointment-schedule',
        name: 'appointment schedule',
        component: () => import(/* webpackChunkName: "about" */ '../views/AppointmentSchedule.vue')
    },
    {
        path: '/problems',
        name: 'problems',
        component: () => import(/* webpackChunkName: "about" */ '../views/Problems.vue')
    },
    {
        path: '/cases',
        name: 'cases',
        component: () => import(/* webpackChunkName: "about" */ '../views/Cases.vue')
    },
    {
        path: '/rehabilitation',
        name: 'rehabilitation',
        component: () => import(/* webpackChunkName: "about" */ '../views/Rehabilitation.vue')
    }
];

const router = new VueRouter({
    routes,
    scrollBehavior() {
        return {x: 0, y: 0};
    }
});

export default router
