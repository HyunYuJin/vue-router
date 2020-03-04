import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

// 웹 페이지가 로딩될 때 한번에 로딩되지 않고 단독으로 요청시, 이 컴포넌트만 로딩되기 때문에
// 속도 면에서 굉장한 차이가 있다.
const About = () => import(/* webpackChunkName: "about" */ './views/About.vue') 
const Users = () => import (/* webpackChunkName "users" */ './views/Users.vue')
const UsersDetail = () => import(/* webpackChunkName "users-detail" */ './views/UsersDetail.vue')
const UsersEdit = () => import(/* webpackChunkName "user-edit" */ './views/UsersEdit')

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about-name',
      component: About
    },
    {
      path: '/users',
      name: 'users',
      // Guard
      beforeEnter: (to, from, next) => {
        console.log('beforeEnter')
        next()
        // 비 로그인 시, 접근 거부 예시
        // if (isUserLogin === true) {
        //   next()
        // } else {
        //   next('')
        // }
      },
      component: Users,
      children: [
        {
          path: ':id',
          name: 'users-detail',
          component: UsersDetail
        },
        {
          path: ':id/edit',
          name: 'users-edit',
          component: UsersEdit
        }
      ]
    },
    {
      path: '/redirect-me',
      redirect: { name: 'users' }
    },
    {
      path: '/*',
      redirect: { name: 'home' }
    }
  ]
})
