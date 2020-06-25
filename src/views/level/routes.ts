import { RouteConfig } from 'vue-router';
import Level from './index.vue';

const routes: Array<RouteConfig> = [
  {
    path: '/level/:id',
    name: 'level',
    component: Level,
    props: true,
  },
];

export default routes;
