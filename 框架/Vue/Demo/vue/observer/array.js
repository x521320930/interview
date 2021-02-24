
import { observer } from './index'
// 劫持数组
const arrayProto = Array.prototype

export const arrayMethods = Object.create(arrayProto)

const methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]
// 函数劫持
methodsToPatch.forEach(methods => {
  arrayMethods[methods] = function (...args) {
    arrayProto[methods].apply(this, args)
    let inserted
    // 判断改变
    // 只有对新增的属性再次进行观察
    switch (methods) {
      case 'push':
      case 'unshift':
        inserted = args
      case 'splice':
        inserted = args.slice(2)
        break
    }
    if (inserted) observer(inserted)
    return arrayProto
  }
})
