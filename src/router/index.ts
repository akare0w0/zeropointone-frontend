import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import type { RouteRecordA } from '@/defines';

const routes: RouteRecordA[] = [
  {
    routeRecord: {
      path: '/',
      name: 'home',
      component: import('@/views/HomeView.vue'),
    },
    displayName: '主页',
  },
  {
    routeRecord: {
      path: '/search',
      name: 'search',
      component: import('@/views/SearchView.vue'),
    },
  },
];

let _routes = Array<RouteRecordRaw>();

routes.forEach((val) => {
  _routes.push(val.routeRecord);
});

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: _routes,
});

export {
  routes,
  router,
};
