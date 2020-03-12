let Koa = require('koa')
let KoaRouter = require('koa-router');


const app = new Koa();
const router = new KoaRouter();

let cateList = require('./datas/cateLists.json')
let navDatas = require('./datas/cateNavDatas.json')
let index = require('./datas/index.json')
let cateModule = require('./datas/indexCateModule.json')
let state = require('./datas/state.json')

//值得买接口

//请求获取所有列表的数据
router.get('/sortlist',(ctx,next)=>{
  ctx.body = cateList
})

//请求获取所有列表的数据
router.get('/nacdatas',(ctx,next)=>{
  ctx.body = navDatas
})

router.get('/item',(ctx,next)=>{
  ctx.body = index
})

router.get('/mode',(ctx,next)=>{
  ctx.body = cateModule
})

router.get('/state',(ctx,next)=>{
  ctx.body = state
})




router.post('/test2', (ctx, next) => {
  // 1. 请求参数： body
  ctx.body = 'post请求的测试数据'
})




















app
  .use(router.routes())
  .use(router.allowedMethods())



app.listen('3001', () => {
  console.log('服务器地址: http://localhost:3001');
})
