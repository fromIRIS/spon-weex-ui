import VueRouter from 'vue-router';
import Vue from 'vue';
import foo from './document/foo.vue';
import weexHeader from 'mds/weex-header/readme.md';
import weexTab from 'mds/weex-tab/readme.md';

Vue.use(VueRouter);



const routes = [
  {
    path: '/',
    component: { template: '<div>home</div>' },
  },
  {
    path: '/home',
    component: { template: '<div>home</div>' },
  },
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

// const app = new Vue({
//   router
// }).$mount('#root')
foo.el = '#root';
foo.router = router;
export default new Vue(foo);


