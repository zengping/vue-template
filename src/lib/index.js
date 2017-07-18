import axios from 'axios'
import store from '@/store'
import DEV_ENV from '@/http/DEV_ENV'
import appApi from '@/appApi'

let Libs = () => {}

Libs.prototype = {
  upload (o) {
    let _files = this.files
    return new Promise((resolve, reject) => {
      let config = {
        headers: {
          'Content-type': 'multipart/form-data'
        }
      }
      let params = new FormData()
      params.append('file', _files[0])
      if (o.params) {
        for (let i in o.params) {
          params.append(i, o.params[i])
        }
      }
      let type = DEV_ENV ? 'get' : 'post'
      axios[type](appApi(o.api), params, config).then((res) => {
        store.commit('hideLoading')
        if (Number(res.data.status.code) === 200) {
          resolve(res.data.data)
        } else {
          reject(res.data.status.message)
        }
      }).catch((err) => {
        store.commit('hideLoading')
        reject(err)
      })
    })
  },
  createFile () {
    let file = document.querySelector('#uploadFile')
    if (!file) {
      document.body.appendChild(createInput())
      file = document.querySelector('#uploadFile')
    }
    file.click()
    return file
    function createInput () {
      let input = document.createElement('input')
      input.type = 'file'
      input.id = 'uploadFile'
      input.style.opacity = 0
      return input
    }
  },
  formSubmit (o) {
    let tempForm = document.createElement('form')
    tempForm.id = 'tempForm'
    tempForm.method = 'post'
    tempForm.action = o.url
    tempForm.target = 'blank'
    tempForm.enctype = 'multipart/form-data'
    // let formdata = new FormData()
    // formdata.append('name', 'fdipzone')
    if (o.params) {
      for (let i in o.params) {
        let hideInput = document.createElement('input')
        hideInput.type = 'hidden'
        hideInput.name = i
        hideInput.value = JSON.stringify(o.params[i])
        tempForm.appendChild(hideInput)
      }
    }
    document.body.appendChild(tempForm)
    tempForm.submit()
  }
}

export default {
  install (Vue, name = '$lib') {
    Object.defineProperty(Vue.prototype, name, { value: new Libs() })
  }
}
