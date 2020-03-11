import Vue from 'vue'
import Vuex from 'vuex'
import cate from './modules/cate.js'
import firse from './modules/firse'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    cate,
    firse
  }
})