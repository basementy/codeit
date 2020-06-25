import { RouteConfig } from 'vue-router';
import MainMenu from './index.vue';

const routes: Array<RouteConfig> = [
  {
    path: '/menu',
    name: 'menu',
    component: MainMenu,
  },
];

export default routes;
