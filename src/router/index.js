import Vue from 'vue'
import Router from 'vue-router'
import navRightAndList from '@/components/navRightAndList'
import articleDetail from '@/components/articleDetail'
import articleSend from '@/components/articleSend'
import login from '@/components/login'
import register from '@/components/register'
import userSetting from '@/components/userSetting'
import userSafe from '@/components/userSafe'
import forgetPassword from '@/components/forgetPassword'
import userZoon from '@/components/userZoon'
import firstSearch from '@/components/firstSearch'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'firstSearch',
      component:firstSearch
    },
    {
      path:'/navRightAndList',
      name:'navRightAndList',
      component:navRightAndList
    },
    {
      path:'/articleDetail',
      name:'articleDetail',
      component:articleDetail
    },
    {
      path:'/articleSend',
      name:'articleSend',
      component:articleSend
    },
    {
      path:'/login',
      name:'login',
      component:login
    }
    ,
    {
      path:'/register',
      name:'register',
      component:register
    },
    {
      path:'/userSetting',
      name:'userSetting',
      component:userSetting
    },
    {
      path:'/userSafe',
      name:'userSafe',
      component:userSafe
    },
    {
      path:'/forgetPassword',
      name:'forgetPassword',
      component:forgetPassword
    }
    ,
    {
      path:'/userZoon',
      name:'userZoon',
      component:userZoon
    }
  ]
})
