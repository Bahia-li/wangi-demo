//引入ajax
import ajs from './ajax.js'
//定义常量设置地址
const BASE ='/api'

//获取数据
export const reqCatelist = () => ajs.get(BASE+'/sortlist')

//获取首页数据
export const reqIndexList = () => ajs.get(BASE+'/item')

//获取商品分类数据
export const reqCateModulet = () => ajs.get(BASE+'/mode')

//获取个人买轮播图数据
export const reqCateState = () => ajs.get(BASE+'/state')