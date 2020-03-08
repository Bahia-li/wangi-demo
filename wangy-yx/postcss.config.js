module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 37.5,//结果为：设计稿元素尺寸/10，比如元素宽375px,最终页面会换算成 10rem
      propList: ['*']
    }
  }
}