
// 如何做到数组拦截
// 备份Array 原型
import { def } from '../utils'

const arrayProto = Array.prototype

export const arrayMethods = Object.create(arrayProto)

const methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'sort',
  'reverse',
  'splice'
]

methodsToPatch.forEach((method) => {
  def(arrayMethods, method, function (...args) {
    const result = arrayProto[method].apply(this, args)
    let inserted
    let ob = this.__ob__
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args
        break
      case 'splice':
        inserted = args.slice(2)
        break
    }
    if (inserted) ob.observeArray(inserted)
    return result
  })
})
