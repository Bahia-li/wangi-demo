import { REQ_CATE } from '../mutations-types.js'
//获取请求接口
import { reqCatelist } from '../../api'

//数据
const state = {
  cates: []
}

const mutations = {
  [REQ_CATE](state, cates) {
    state.cates = cates
  }
}

const actions = {
  async getCates({commit}) {
    
    //获取列表数据
    const result = await reqCatelist();
    
    //判断数据是否请求成功200-299
    if (result.status >= 200 && result.status < 299) {
      const cates = result.data
      
      commit(REQ_CATE, cates)
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
