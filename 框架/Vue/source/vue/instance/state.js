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
      return this[source][key]
    },
    set: function (newValue) {
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
    proxy(vm, '_data', key)
  }
  observer(data)
}

function initComputed(vm) {

}

function initWatch(vm) {

}
