import observe from "./observe"

export default function defineReactive (obj, key, val) {
  if (arguments.length == 2) { val = obj[key] }
  let childob = observe(val)
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: true,
    get: function () {
      return val
    },
    set: function (newValue) {
      val = newValue
      childob = observe(newValue)
    }
  })
}