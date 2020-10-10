import { initState } from './state'

export function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    const vm = this
    vm.$options = options
    // MVVM 响应式原理
    // data computed warch
    initState(vm)
  }
}