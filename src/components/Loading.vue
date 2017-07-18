<template>
  <div>
    <div id="loadingToast" v-show="loading">
        <div class="weui-mask_transparent"></div>
        <div class="weui-toast">
            <i class="weui-loading weui-icon_toast"></i>
            <p class="weui-toast__content">数据加载中</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    loading () {
      return this.$store.state.loading
    }
  }
}
</script>
