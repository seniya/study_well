import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import Home from '../pages/Home.vue';
import Create from '../pages/users/Create.vue';
import List from '../pages/users/List.vue';
import Update from '../pages/users/Update.vue';
import Detail from '../pages/users/Detail.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/create',
    name: 'create',
    component: Create
  },
  {
    path: '/list',
    name: 'list',
    component: List
  },

  {
    path: '/update/:id',
    name: 'update',
    component: Update
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: Detail
  }
];

const router = new VueRouter({
  mode: 'hash',
  routes: routes
});

export default router;
