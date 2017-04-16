import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
// import HomeTopicList from '@/components/HomeTopicList'
import TopicDetail from '@/components/TopicDetail'
import infiniteScroll from 'vue-infinite-scroll'
Vue.use(infiniteScroll)
Vue.use(Router)

export default new Router({
  mode : 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path:'/topic/:id',
      component:TopicDetail,
      name : 'TopicDetail'
    }
  ]
})
