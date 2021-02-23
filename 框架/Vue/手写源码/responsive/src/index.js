import Vue from './instance/index'
window._Vue = new Vue({
  el: '#app',
  data: {
    msg: '你好',
    b: { a: 1}
  }
})

console.log(window._Vue)