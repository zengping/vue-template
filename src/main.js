// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from '@/router'
import store from '@/store'
import Loading from '@/components/Loading'
import Jalert from '@/components/Jalert'
import Jconfirm from '@/components/Jconfirm'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store: store,
  components: {
    Loading,
    Jalert,
    Jconfirm
  }
}).$mount('#app')
