import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/utils/element/index.js'
import 'element-ui/lib/theme-chalk/display.css';


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
