export default {
  state: {
    jconfirm: false,
    jconfirm_text: '',
    jconfirm_callback: function () {}
  },
  mutations: {
    showJconfirm (state) {
      state.jconfirm = true
    },
    hideJconfirm (state) {
      state.jconfirm = false
    },
    setJconfirmText (state, o) {
      state.jconfirm_text = o.text
      state.jconfirm_callback = o.callback || function () {}
      state.jconfirm = true
    }
  },
  actions: {
  }
}
