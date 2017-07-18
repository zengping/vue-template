<template>
  <div>
    <div id="dialog1" v-show="jconfirm">
        <div class="weui-mask"></div>
        <div class="weui-dialog">
            <div class="weui-dialog__hd"><strong class="weui-dialog__title">友情提示</strong></div>
            <div class="weui-dialog__bd">{{jconfirmText}}</div>
            <div class="weui-dialog__ft">
                <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_default" v-on:click="btnCancel">取消</a>
                <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" v-on:click="btnOk">确定</a>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    jconfirm () {
      return this.$store.state.jconfirm
    },
    jconfirmText () {
      return this.$store.state.jconfirm_text
    },
    jconfirmCallback () {
      return this.$store.state.jconfirm_callback
    }
  },
  methods: {
    btnOk () {
      this.$store.commit('hideJconfirm')
      if (this.jconfirmCallback) {
        this.jconfirmCallback()
      }
    },
    btnCancel () {
      this.$store.commit('hideJconfirm')
    }
  }
}
</script>
