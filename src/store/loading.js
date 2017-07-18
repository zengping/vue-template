export default {
  state: {
    loading: false,
    loading_text: ''
  },
  mutations: {
    showLoading (state) {
      state.loading = true
    },
    hideLoading (state) {
      state.loading = false
    },
    setLoadingText (state, text) {
      state.loading_text = text
      state.loading = true
    }
  },
  actions: {
  }
}
