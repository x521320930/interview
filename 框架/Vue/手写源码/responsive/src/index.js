// import Vue from './instance/index'
import Vue from 'vue/dist/vue.esm.browser'
window._Vue = new Vue({
  el: '#app',
  data: {
    msg: '你好',
    b: { a: 1}
  },
  computed: {
    fromSource () {
      return this.msg
    }
  }
})

console.log(window._Vue)