
import { arrayMethods } from './array'
export class Observer {
  constructor (value) {
    if (Array.isArray(value)) {
      this.observerArray(value)
    } else {
      this.walk(value)
    }
  }
  // 观察对象
  walk (obj) {
    const data = Object.keys(obj)
    for (let i = 0; i < data.length; i++) {
      const key = data[i]
      const value = obj[data[i]]
      defineReactive(obj, key, value)
    }
  }
  // 观察数组
  observerArray (value) {
    // 观察数据有2中方式，无法观测到
    // length--  以下标方式进行赋值
    value.__proto__ = arrayMethods
    // 判断数组中是否有对象并进行观察
    for (let i = 0, l = value.length; i < l; i++) {
      observer(value[i])
    }
  }
}


export function observer (data) {
  if (data === null || typeof data !== 'object') return
  new Observer(data)
}

export function defineReactive (obj, key, value) {
  // 观察
  observer(value)
  // 兼容IE8以上
  Object.defineProperty (obj, key, {
    enumerable: true,
    configurable: true,
    get: function () {
      console.log('观察-获取')
      return value
    },
    set: function (newValue) {
      console.log('观察-设置')
      if (newValue === value) return 
      observer(newValue)
      value = newValue
    }
  })
}