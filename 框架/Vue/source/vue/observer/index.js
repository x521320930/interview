
export class Observer {
  constructor (value) {
    this.value = value

    this.walk(value)
  }
  walk (obj) {
    const data = Object.keys(obj)
    for (let i = 0; i < data.length; i++) {
      const key = data[i]
      const value = obj[data[i]]
      defineReactive(obj, key, value)
    }
  }
}


export function observer (data) {
  if (data === null || typeof data !== 'object') return
  new Observer(data)
}

export function defineReactive (obj, key, value) {
  console.log(key, value)
  observer(value)
  Object.defineProperty (obj, key, {
    enumerable: true,
    configurable: true,
    get: function () {
      console.log('收集')
      return value
    },
    set: function (newValue) {
      value = newValue
    }
  })
}