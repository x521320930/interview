
// 如何做到数组拦截
// 备份Array 原型

const arrayProto = Array.prototype

const arrayMethods = Object.create(arrayProto)

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
  arrayMethods[method] = function (...args) {
    
    switch (method) {

    }


    arrayProto[methods].apply(this, args)
    return arrayProto
  }
})
