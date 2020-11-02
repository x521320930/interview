import { initState } from './state'

export function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    const vm = this
    vm.$options = options
    // MVVM 响应式原理
    // 拦截数组方法，和 对象属性
    initState(vm) // data computed warch
  }

  Vue.prototype._update = function (a) {
    
  }
}