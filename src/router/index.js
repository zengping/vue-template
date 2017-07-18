import Vue from 'vue'
import Router from 'vue-router'
import http from '@/http'
import lib from '@/lib'
import app from './default'
import directives from '../directives'

Vue.use(Router)
Vue.use(http)
Vue.use(lib)
directives.init(Vue)

let router = []
app.router.forEach(function (route) {
  router.push(route)
})

export default new Router({
  mode: 'hash',
  routes: router
})
