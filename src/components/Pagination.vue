<template>
  <div v-show="show">
    <ul class="pagination">
      <li class="first" v-show="nowPage != 1">
        <a href="javascript:void(0)" @click="toPage(1)">«</a>
      </li>
      <li class="previous" v-show="nowPage != 1">
        <a href="javascript:void(0)" @click="toPage(nowPage - 1)">‹</a>
      </li>
      <li v-for="i in pageItem">
        <a href="javascript:void(0)" :class="{'current': i == nowPage}" @click="toPage(i)">{{i}}</a>
      </li>
      <li class="next" v-show="nowPage != pageNum">
        <a href="javascript:void(0)" @click="toPage(nowPage + 1)">›</a>
      </li>
      <li class="last" v-show="nowPage != pageNum">
        <a href="javascript:void(0)" @click="toPage(pageNum)">»</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    total: {
      type: Number
    },
    pageSize: {
      type: Number,
      default: 10
    },
    func: {
      type: String
    },
    pageLen: {
      type: Number,
      default: 10
    }
  },
  data () {
    return {
      show: false,
      pageNum: 0,
      nowPage: 1,
      pageItem: []
    }
  },
  methods: {
    init () {
      let num = Math.ceil(this.total / this.pageSize)
      if (num > 1) {
        this.show = true
        this.pageNum = num
        this.createPageItem()
      } else {
        this.show = false
      }
    },
    createPageItem () {
      this.pageItem = []
      let base = this.nowPage > 1 ? Math.floor((this.nowPage - 1) / this.pageLen) : 0
      let start = base * this.pageLen + 1
      let end = base * this.pageLen + this.pageLen
      end = end > this.pageNum ? this.pageNum : end
      for (let i = start; i <= end; i++) {
        this.pageItem.push(i)
      }
    },
    toPage (i) {
      this.nowPage = i
      this.$emit(this.func, i)
      this.init()
    }
  },
  watch: {
    'total' (val, oldVal) {
      this.init()
    }
  }
}
</script>
