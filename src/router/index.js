import { createRouter, createWebHistory } from 'vue-router';
import list from '../views/list.vue';
import deets from '../views/deets.vue';
import add from '../views/add.vue';
import edit from '../views/edit.vue';

const routes = [
  { path: '/', component: list },
  { path: '/contacts/:id', component: deets, props: true },
  { path: '/add', component: add },
  { path: '/edit/:id', component: edit, props: true }
];

export default createRouter({
  history: createWebHistory(),
  routes,
});