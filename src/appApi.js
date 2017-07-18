import DEV_ENV from '@/http/DEV_ENV'

let appApi = (c) => {
  let a = {
    // vue api demo
    'VUE_T_A_DEMO': DEV_ENV ? 'static/jsons/demo.json' : 'static/jsons/demo.json'
  }
  return a[c]
}

export default appApi
