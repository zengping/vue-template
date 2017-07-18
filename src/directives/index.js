import checkall from './checkall'

export default {
  init (Vue) {
    Vue.directive('check-all', checkall)
  }
}
