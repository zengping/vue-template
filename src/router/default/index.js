import App from '@/App'
import Index from '@/router/index/index'

let router = [{
  path: '/',
  component: App,
  children: []
}]
Index.router.forEach(function (route) {
  router[0].children.push(route)
})

export default {
  router: router
}
