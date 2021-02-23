import { parsePath } from '../utils/index'
import Dep, { pushTarget, popTarget } from './dep'
let id = 0
class Watcher {
  /**
   * 
   * @param {*} vm V当前组件的实例 new Vue
   * @param {*} exprOrFn 用户可能传入的是一个表达式 也有可能传入一个函数
   * @param {*} cb 用户传入的回调函数
   * @param {*} opts 一些参数
   */
  constructor (vm, exprOrFn, cb = () => {}, opts = {}) {
    this.vm = vm
    this.exprOrFn = exprOrFn
    if (typeof this.exprOrFn === 'function') {
      // getter 就是 new watcher 传入的第二个函数
      this.getter = exprOrFn
    } else {
      this.getter = parsePath(exprOrFn)
    }
    this.cb = cb
    this.opts = opts
    this.id = ++id
    this.get()
  }

  get () {
    pushTarget(this)
    // 让当前的函数直接执行
    this.getter()
    popTarget()
  }
  // 执行
  run () {
    // 让当前的函数直接执行
    // 让当前的函数直接执行
    this.getter()
  }
  // 更新
  update () {
    this.run()
  }
}

// 渲染使用 计算属性也要用它  vm watch 也用它
export default Watcher