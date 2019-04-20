import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TodoList from '@/components/TodoList'
import TodoList_Easy from '@/components/TodoList_Easy'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',//默认进入Vue首页
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
     },{
      path: '/TodoList',
      name: 'TodoList',
      component: TodoList
    },{
      path: '/TodoList_Easy',
      name: 'TodoList_Easy',
      component: TodoList_Easy
    }
  ]
})
