import VueRouter from 'vue-router';
import foo from './src/foo.vue';

Vue.use(VueRouter);

import weexHeader from 'examples/weex-header/example.vue';
import weexTab from 'examples/weex-tab/example.vue';

const routes = [
  {
    path: '/header',
    component: weexHeader,
  },
  {
    path: '/tab',
    component: weexTab,
  },
];

const router = new VueRouter({
  routes,
});

foo.el = '#root';
foo.router = router;
export default new Vue(foo);