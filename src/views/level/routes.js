import Level from './index.vue';

const routes = [
  {
    path: '/level/:id',
    name: 'level',
    component: Level,
    props: true,
  },
];

export default routes;
