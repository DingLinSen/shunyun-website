import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入百度地图
import BaiduMap from 'vue-baidu-map'
// 使用百度地图Ak
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'xKW7l0UFYKowwkOI1BZxSdrBHQzL0HxO',
})

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// import './utils/flexible'

import './mock/index.js'
// 跳转后返回顶部
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})

router.beforeEach((to, from, next) => {
  document.body.scrollTop = 0
  // firefox
  document.documentElement.scrollTop = 0
  // safari
  window.pageYOffset = 0
  next()
})
if (history.scrollRestoration) {
  history.scrollRestoration = 'manual'
}

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
