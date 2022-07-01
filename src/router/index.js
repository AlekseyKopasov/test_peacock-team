import Vue from 'vue';
import VueRouter from 'vue-router';
import ResultPage from '@/views/ResultPage.vue';
import HomeView from '../views/HomeView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/result',
    name: 'result',
    component: ResultPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
