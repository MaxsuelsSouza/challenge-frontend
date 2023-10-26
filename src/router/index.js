
import routes from './routes';

import { createRouter, createWebHashHistory } from 'vue-router';

const router =createRouter({
  history: createWebHashHistory(),
  routes: routes,
  mode: 'history'
});

export default router;
