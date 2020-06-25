import { RouteConfig } from 'vue-router';
import Levels from './index.vue';

const routes: Array<RouteConfig> = [
  {
    path: '/levels',
    name: 'levels',
    component: Levels,
  },
];

export default routes;
