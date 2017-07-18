import axios from 'axios'
import store from '@/store'
import DEV_ENV from '@/http/DEV_ENV'
import appApi from '@/appApi'

let Http = () => {}

Http.prototype = {
  get (o) {
    o.type = 'get'
    return this.xhr(o)
  },
  post (o) {
    o.type = DEV_ENV ? 'get' : 'post'
    return this.xhr(o)
  },
  put (o) {
    o.type = DEV_ENV ? 'get' : 'put'
    return this.xhr(o)
  },
  delete (o) {
    o.type = DEV_ENV ? 'get' : 'delete'
    return this.xhr(o)
  },
  getUrl (o) {
    let uri = appApi(o.api)
    if (o.type !== 'post' && o.params.id && !DEV_ENV) {
      uri = uri + '/' + o.params.id
    }
    if ((o.type === 'get' || o.type === 'delete') && Object.keys(o.params).length > 0) {
      uri = uri + '?' + this.joinP(o.params)
    }
    return uri
  },
  joinP (o) {
    let x = ''
    for (let i in o) {
      if (i !== 'id') {
        x += i + '=' + o[i] + '&'
      }
    }
    x = encodeURI(x)
    return x
  },
  xhr (o) {
    return new Promise((resolve, reject) => {
      let config = {
        headers: o.headers ? o.headers : {
          'Content-type': 'application/json'
        },
        timeout: o.timeout ? o.timeout : 30000
      }
      if (!o.loading) {
        store.commit('showLoading')
      }
      let instance = axios.create(config)
      instance[o.type](this.getUrl(o), o.params).then((res) => {
        store.commit('hideLoading')
        if (Number(res.data.status.code) === 200) {
          resolve(res.data.data)
        } else {
          // reject(res.data.status.message)
          let msg = res.data.status.message ? res.data.status.message : '对不起，服务器接口出错！请联系技术人员！'
          reject(msg)
        }
      }).catch((err) => {
        store.commit('hideLoading')
        if (err.message.indexOf('timeout') > -1) {
          reject('请求超时,请重新请求！')
        } else {
          reject(err.message)
        }
      })
    })
  }
}

export default {
  install (Vue, name = '$http') {
    Object.defineProperty(Vue.prototype, name, {value: new Http()})
  }
}
