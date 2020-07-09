import Level from './index.vue';
import Challenges from './challenges/index.vue';
import Challenge from './challenge/index.vue';

const routes = [
  {
    path: '/level/:id',
    name: 'level',
    component: Level,
    props: true,
    children: [
      {
        path: '/level/:id/challenges',
        name: 'challenges',
        component: Challenges,
        props: true,
      },
      {
        path: '/level/:id/challenge/:challenge',
        name: 'challenge',
        component: Challenge,
        props: true,
      },
    ],
  },
];

export default routes;
