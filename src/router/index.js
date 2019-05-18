import Vue from 'vue';
import Router from 'vue-router';
import Page01 from '@/views/Page01';
import Page02 from '@/views/Page02';
import Page03 from '@/views/Page03';
import Page04 from '@/views/Page04';
import Page05 from '@/views/Page05';
import Page06 from '@/views/Page06';

import Turntable from '@/views/Turntable';


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
    {
      path: '/Page03',
      name: 'Page03',
      component: Page03,
    },
    {
      path: '/Page04',
      name: 'Page04',
      component: Page04,
    },
    {
      path: '/Page05',
      name: 'Page05',
      component: Page05,
    },
    {
      path: '/Page06',
      name: 'Page06',
      component: Page06,
    },
    {
      path: '/Turntable',
      name: 'Turntable',
      component: Turntable,
    },
  ],
});
