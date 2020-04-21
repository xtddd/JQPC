import Vue from "vue";
import VueRouter from "vue-router";

const policeToday = resolve => require(['../views/policeToday/policeToday.vue'], resolve);

Vue.use(VueRouter);
const routes = [
  // 今日警情
  { name: 'policeToday', path: '/', meta: { title: '今日警情' }, component: policeToday },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
