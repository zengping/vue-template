<template>
  <div>
    <div v-show="jalert">
        <div class="weui-mask"></div>
        <div class="weui-dialog">
            <div class="weui-dialog__hd"><strong class="weui-dialog__title">友情提示</strong></div>
            <div class="weui-dialog__bd">{{alertText}}</div>
            <div class="weui-dialog__ft">
                <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" v-on:click="btnOk">确定</a>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    jalert () {
      return this.$store.state.jalert
    },
    alertText () {
      return this.$store.state.jalert_text
    },
    alertCallback () {
      return this.$store.state.jalert_callback
    }
  },
  methods: {
    btnOk () {
      this.$store.commit('hideJalert')
      if (this.alertCallback) {
        this.alertCallback()
      }
    }
  }
}
</script>
