import Vue from './instance/index'
window._Vue = new Vue({
  el: '#app',
  data: {
    msg: '你好',
    a: {
      b: 1
    },
    b: [1, 2, 3]
  }
})

console.log(window._Vue)