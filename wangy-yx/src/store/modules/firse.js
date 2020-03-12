import { REQ_INDEX, REQ_MODULETS,REQ_CATESTATE } from '../mutations-types.js'
//获取请求接口
import { reqIndexList, reqCateModulet ,reqCateState} from '../../api'


//数据
const state = {
  firses: {},
  modulets: [],
  cateState:[]
}

const mutations = {
  [REQ_INDEX](state, firses) {
    state.firses = firses
  },
  [REQ_MODULETS](state, modulets) {
    state.modulets = modulets
  },
  [REQ_CATESTATE](state,cateState){
    state.cateState = cateState
  }
}

const actions = {
  async getFirse({ commit }) {

    //获取列表数据
    const result = await reqIndexList();


    //判断数据是否请求成功200-299
    if (result.status >= 200 && result.status < 299) {
      const firses = result.data

      commit(REQ_INDEX, firses)
    }
  },
  async getModulets({ commit }) {

    //获取列表数据
    const result = await reqCateModulet();


    //判断数据是否请求成功200-299
    if (result.status >= 200 && result.status < 299) {
      const modulets = result.data

      commit(REQ_MODULETS, modulets)
    }
  },
  async getCateState({ commit }){
    //获取列表数据
    const result = await reqCateState();
    
    //判断数据是否请求成功200-299
    if (result.status >= 200 && result.status < 299) {
      const cateState = result.data
      commit(REQ_CATESTATE, cateState)
    }
  }
}
const getters = {

}
export default {
  state,
  mutations,
  actions,
  getters
}
