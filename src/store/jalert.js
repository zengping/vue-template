export default {
  state: {
    jalert: false,
    jalert_text: '',
    jalert_callback: function () {}
  },
  mutations: {
    showJalert (state) {
      state.jalert = true
    },
    hideJalert (state) {
      state.jalert = false
    },
    setJalertText (state, o) {
      state.jalert_text = o.text
      state.jalert_callback = o.callback || function () {}
      state.jalert = true
    }
  },
  actions: {
  }
}
