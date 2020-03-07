import First from '../pages/First/First.vue'
import MyCart from '../pages/MyCart/MyCart.vue'
import Personal from '../pages/Personal/Personal.vue'
import Sort from '../pages/Sort/Sort.vue'
import Worth from '../pages/Worth/Worth.vue'

export default [
  {
    path: '/',
    redirect: '/first'
  },
  {
    path: "/mycarth",
    component: MyCart
  }, {
    path: "/first",
    component: First
  }, {
    path: "/personal",
    component: Personal
  }, {
    path: "/sort",
    component: Sort
  }, {
    path: "/worth",
    component: Worth
  }
]

