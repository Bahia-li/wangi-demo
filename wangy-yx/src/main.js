import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//引入路由
import router from "./router"
//引入mint-ui
import Mint from 'mint-ui';
//引入vant
import Vant from 'vant'
import 'vant/lib/index.css';

import store from './store'

Vue.use(Vant);

import './tools/rem'

//注册Mint
Vue.use(Mint);

new Vue({
  el: "#app",
  components: {
    App
  },
  template: '<App/>',
  router,
  store
})
