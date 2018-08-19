import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/views/Index';
import Answer from '@/views/Answer';
import Congratulations from '@/views/Congratulations';
import LuckDraw from '@/views/LuckDraw';
import Turntable from '@/views/Turntable';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/answer',
      name: 'Answer',
      component: Answer,
    },
    {
      path: '/luckDraw',
      name: 'LuckDraw',
      component: LuckDraw,
    },
    {
      path: '/congratulations',
      name: 'Congratulations',
      component: Congratulations,
    },
    {
      path: '/turntable',
      name: 'Turntable',
      component: Turntable,
    },
  ],
});
