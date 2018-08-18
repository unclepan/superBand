import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/views/Index';
import Answer from '@/views/Answer';
// import End from '@/views/End';

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
    // {
    //   path: '/end',
    //   name: 'End',
    //   component: End,
    // },
  ],
});
