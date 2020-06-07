import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Create from '../pages/users/Create.vue';
import List from '../pages/users/List.vue';
import View from '../pages/users/View.vue';
import Update from '../pages/users/Update.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/list',
    name: 'lsit',
    component: List
  },

];

const router = new VueRouter({

  routes: routes,

})

export default router;
