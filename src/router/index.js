import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";


const routes = [
  { path: "/", name: "home", component: HomeView },

  { path: "/brazil", name: "brazil",   component: () => import( /* webpackChunkName: "brazil" */'@/views/Brazil.vue') },
  { path: "/jamaica", name: "jamaica", component: () => import( /* webpackChunkName: "jamaica" */'@/views/Jamaica.vue') },
  { path: "/panama", name: "panama",   component: () => import( /* webpackChunkName: "panama" */'@/views/Panama.vue') },
  { path: "/hawaii", name: "hawaii",   component: () => import( /* webpackChunkName: "hawaii" */'@/views/Hawaii.vue') },
  { path: "/destination/:id", component: () => import('@/views/DestinationShow.vue') },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'vue-forte'
});

export default router;
