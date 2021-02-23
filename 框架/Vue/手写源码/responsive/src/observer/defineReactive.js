import observe from "./observe"
import Dep from './dep'
export default function defineReactive (obj, key, val) {
  if (arguments.length == 2) { val = obj[key] }

  let dep = new Dep()
  let childob = observe(val)
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: true,
    get: function () {
      if (Dep.target) {
        dep.depend()
        if (childob) {
          childob.dep.depend()
        }
      }
      return val
    },
    set: function (newValue) {
      val = newValue
      childob = observe(newValue)
      dep.notify()
    }
  })
}