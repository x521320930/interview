import { def } from '../utils'
import defineReactive from './defineReactive'
import observe from './observe'
import { arrayMethods } from './array'

// 将一个正常的object转换为每个层级的属性都是响应式的
export default class Observer {
  constructor (value) {
    // 存放值
    this.value = value
    // 把私有自定义属性__ob__
    // 设置不可枚举
    // 设置属性 指向自己的实例Observer
    def(value, '__ob__', this)
    if (Array.isArray(value)) {
      Object.setPrototypeOf(value, arrayMethods)
      this.observeArray(value)
    } else {
      this.walk(value)
    }
    
  }
  // 对象进行响应式处理
  walk (val) {
    const keys = Object.keys(val)
    for (let i = 0; i < keys.length; i++) {
      defineReactive(val, keys[i])
    }
  }

  observeArray (item) {
    for (let i = 0, l = item.length; i < l; i++) {
      observe(item[i])
    }
  }
}