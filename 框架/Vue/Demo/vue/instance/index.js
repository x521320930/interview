import { initMixin } from './init'

function Vue (options) {
  // 初始化Vue 并传入参数
  this._init(options)
}
// 初始化
initMixin(Vue)

export default Vue