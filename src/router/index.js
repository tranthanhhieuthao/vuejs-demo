import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CommentHome from '@/components/CommentHome'
import UserDetail from '@/components/UserDetail'
import UserEdit from '@/components/UserEdit'
import userComments from '@/components/userComments'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/users',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/posts',
      name: 'CommentHome',
      component: CommentHome
    },
    {
      path: '/users/:id',
      name: 'UserDetail',
      component: UserDetail
    },
    {
      path: '/users/edit/:id',
      name: 'UserEdit',
      component: UserEdit
    },
    {
      path: '/posts/:id/comments',
      name: 'userComments',
      component: userComments
    }
  ]
})
