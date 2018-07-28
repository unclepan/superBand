import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/views/Index';
import Main from '@/views/Main';
import End from '@/views/End';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/main',
      name: 'Main',
      component: Main,
    },
    {
      path: '/end',
      name: 'End',
      component: End,
    },
  ],
});
