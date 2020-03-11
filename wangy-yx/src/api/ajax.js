import axios from 'axios'
import qs from 'qs'
//设置请求响应
axios.interceptors.response.use(res => {
  const { config, data } = res

  //判断请求是否是POST请求
  if (config.method.toUpperCase() === 'POST' && data instanceof Object) {
    res.data = qs.stringify(data)
  }
  return res;
}, error => {
  //请求错误信息
  alert(error)
});


//设置响应拦截器
axios.interceptors.request.use(config => {
  return config;
}, error => {
  return Promise.reject(error);
});

export default axios