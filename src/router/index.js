import { createRouter, createWebHistory , useRoute} from "vue-router";
import HomeView from "../views/HomeView.vue";


const routes = [
  { path: "/", name: "home", component: HomeView },
  { 
    path: "/Destination/:id/:slug", 
    name:"destination.show", 
    component: () => import('@/views/DestinationShow.vue'),
    props: route => ({...route.params,  id: parseInt(route.params.id)}),
    children:[
      {
        path: ':experienceSlug',
        name: 'experience.show',
        component: () => import('@/views/ExperienceShow.vue'),
        props: route => ({ ...route.params, id: parseInt(route.params.id)})
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'vue-forte'
});

export default router;
