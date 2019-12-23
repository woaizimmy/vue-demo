import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

let routes = [
  {
    path: '/',
    component: resolve => require(['@/pages/index.vue'], resolve),
    meta: {
      title: '首页',
    },
    hidden: true,
  },
  {
    path: '/index',
    component: resolve => require(['@/pages/index.vue'], resolve),
    meta: {
      title: '首页',
    },
    hidden: true,
  },
  {
    path: '/pdf',
    component: resolve => require(['./pages/pdf.vue'], resolve),
    meta: {
      title: 'PDF查看',
    },
    hidden: true,
  },
  {
    path: '/store',
    component: resolve => require(['./pages/store.vue'], resolve),
    meta: {
      title: 'store',
    },
    hidden: true,
  },
  {
    path: '/element',
    component: resolve => require(['./pages/element.vue'], resolve),
    meta: {
      title: 'elementUI',
    },
    hidden: true,
  },
  {
    path: '/table',
    component: resolve => require(['./pages/table.vue'], resolve),
    meta: {
      title: '表格页',
    },
    hidden: true,
  },
  {
    path: '/login',
    component: resolve => require(['./pages/login.vue'], resolve),
    meta: {
      title: '登录页',
    },
    hidden: true,
  },

  // 列表页和详情页的路由示例
  /*
  {
    path: '/news',
    component: resolve => require(['./pages/news.vue'], resolve),
    meta: {
      title: '新闻',
    },
    hidden: true,
  },
  {
    path: '/news/:id',
    component: resolve => require(['./pages/newsDetail.vue'], resolve),
    meta: {
      title: '新闻详情',
    },
    hidden: true,
  },
  */
];

[
  // 'otherPage',  //page下的文件夹otherPage，其含vue页面和router.js(结构如上routes)
].forEach(m => routes = routes.concat(require(`./pages/${m}/router`).default));

routes.push({
  path: '*',
  hidden: true,
  redirect: {
    path: '/'
  }
});

export default new Router({ routes });
