import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: function (resolve) {
        require(['../components/index/Index.vue'], resolve)
      },
      meta: {
        title: '首页'
        // requireAuth: true,
      }
    },
    {
      path: '/manager',
      name: 'manager',
      component: function (resolve) {
        require(['../components/manager/Index.vue'], resolve)
      },
      meta: {
        title: '个人中心'
        // requireAuth: true,
      }
    },
    {
      path: '/location',
      name: 'location',
      component: function (resolve) {
        require(['../components/location/Index.vue'], resolve)
      },
      meta: {
        title: '地图'
        // requireAuth: true,
      }
    }
  ]
})
