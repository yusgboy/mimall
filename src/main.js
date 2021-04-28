import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from './api/axios'
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
const mock=false;
if(mock){
  require('./mock/mock.js')
}
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
