import Vue from 'vue';
import Router from 'vue-router';
import Page01 from '@/views/Page01';
import Page02 from '@/views/Page02';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Page01',
      component: Page01,
    },
    {
      path: '/Page02',
      name: 'Page02',
      component: Page02,
    },
  ],
});
