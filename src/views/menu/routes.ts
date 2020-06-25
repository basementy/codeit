import { RouteConfig } from 'vue-router';
import MainMenu from './index.vue';

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'menu',
    component: MainMenu,
  },
];

export default routes;
