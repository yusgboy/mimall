import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from './api/axios'
import VueLazyLoad from 'vue-lazyload'
import VueCookies from 'vue-cookies'
import store from './store'
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.use(VueLazyLoad,{
  loading:'/imgs/loading-svg/loading-bars.svg'
});
Vue.use(VueCookies);
const mock=false;
if(mock){
  require('./mock/mock.js')
}
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
