import { observer } from '../observer'

export function initState (vm) {
  const opts = vm.$options
  
  if (opts.data) {
    initData(vm)
  }
  if (opts.computed) {
    initComputed(vm)
  }
  if (opts.watch) {
    initWatch(vm)
  }
}

function proxy (obj, source, key) {
  Object.defineProperty(obj, key, {
    get: function () {
      console.log('代理-获取')
      return this[source][key]
    },
    set: function (newValue) {
      console.log('代理-设置')
      this[source][key] = newValue
    }
  })
}
function initData(vm) {
  let data = vm.$options.data

  data = vm._data = typeof data === 'function' ? data.call(vm) : data || {}
  
  const keys = Object.keys(data)
  let i = keys.length
  while (i--) {
    const key = keys[i]
    // 代理下划线data
    proxy(vm, '_data', key)
  }
  // 观察数据
  observer(data)
}

function initComputed(vm) {

}

function initWatch(vm) {

}
