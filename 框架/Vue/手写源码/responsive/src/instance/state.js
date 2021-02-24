import observe from '../observer/observe'
import Watcher from '../Observer/watcher'
import { noop } from '../utils/index'

const sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
}
const computedWatcherOptions = { lazy: true }

export function initState (vm) {

  const opts = vm.$options
  
  if (opts.data) {
    initData(vm)
  }
  if (opts.computed) initComputed(vm, opts.computed)

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
    // 代理下划线data
    proxy(vm, '_data', key)
  }
  // 观察数据
  observe(data)
}




function initComputed(vm, computed) {
  console.log(vm, computed)
  const watchers = vm._computedWatchers = Object.create(null)

  for (const key in computed) {
    const userDef = computed[key]
    const getter = typeof userDef === 'function'? userDef : userDef.get
    watchers[key] = new Watcher(vm, getter, noop, computedWatcherOptions )
    console.log(key in vm)

    // 实例化计算属性
    // 排除已存在的 计算属性与data.属性 是否有冲突
    if (!(key in vm)) {
      defineComputed(vm, key, userDef)
    }
  }
}


export function defineComputed (target, key, userDef) {

  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = createComputedGetter(userDef)
  }

  Object.defineProperty(target, key, sharedPropertyDefinition)
}


function createComputedGetter (key) {
  return function computedGetter () {
    const watcher = this._computedWatchers && this._computedWatchers[key]
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate()
      }
      if (Dep.target) {
        watcher.depend()
      }
      return watcher.value
    }
  }
}

function initWatch(vm) {

}
