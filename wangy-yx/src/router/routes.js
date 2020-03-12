import First from '../pages/First/First.vue'
import MyCart from '../pages/MyCart/MyCart.vue'
import Personal from '../pages/Personal/Personal.vue'
import Sort from '../pages/Sort/Sort.vue'
import Worth from '../pages/Worth/Worth.vue'
import SearchCon from '../components/SearchCon/SearchCon.vue'
import FirstsItem from '../components/Firsts/FirstsItem'
import Search from '../components/Search/Search.vue'

export default [
  {
    path: '/',
    redirect: '/first'
  },
  {
    path: "/mycarth",
    component: MyCart,
    meta: { isShowFooter: true }
  }, {
    path: "/first",
    component: First,
    meta: { isShowFooter: true },
    children: [
      {
        path: '/item',
        component: FirstsItem
      }
    ]
  }, {
    path: "/personal",
    component: Personal
  }, {
    path: "/sort",
    component: Sort,
    meta: { isShowFooter: true }
  }, {
    path: "/worth",
    component: Worth,
    meta: { isShowFooter: true }
  }, {
    path: "/search",
    component: Search,
  },
  {
    path: "/searchcon",
    component: SearchCon
  }

]

