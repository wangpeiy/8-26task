import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
//全局注册组件
import MyPannel from '@/components/MyPannel'
Vue.component('MyPannel', MyPannel);

new Vue({
  render: h => h(App)
}).$mount('#app')
