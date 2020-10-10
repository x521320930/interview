import Vue from 'vue/instance';

window.vm = new Vue({
  el: '#app',
  data () {
    return {
      msg: '1',
      obj: { name: '1', age: 10 },
      arr: [1, 2, 3]
    }
  },
  computed: {

  },
  watch: {

  }
})
console.log(vm)