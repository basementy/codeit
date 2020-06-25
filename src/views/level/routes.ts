import { RouteConfig } from 'vue-router';
import Level from './index.vue';

const routes: Array<RouteConfig> = [
  {
    path: '/level',
    name: 'level',
    component: Level,
  },
];

export default routes;
