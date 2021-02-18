
function isPromise(x) {
  return (x !== null && typeof x === 'object') || typeof x === 'function'
}

function resolvePromise(promise2, x, resolve, reject) {
  if (promise2 === x) return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
  if (isPromise(x)) {
    let called
    try {
      const { then } = x
      if (typeof then === 'function') {
        then.call(x, res => {
          if (called) return
          called = true
          resolvePromise(promise2, res, resolve, reject)
        }, err => {
          if (called) return
          called = true
          reject(err)
        })
      } else {
        if (called) return
        called = true
        resolve(x)
      }
    } catch (error) {
      reject(error)
    }
  } else {
    resolve(x)
  }
}
function Promise(executor) {
  // 状态
  this.PromiseState = 'pending'
  // 结果
  this.PromiseResult = undefined
  // 成功的回调函数
  this.onResolvedCallbacks = []
  // 失败的回调函数
  this.onRejectedCallbacks = []

  let resolve = (value) => {
    if (this.PromiseState !== 'pending') return
    this.PromiseState = 'fullfilled'
    this.PromiseResult = value
    this.onResolvedCallbacks.forEach(n => n(value))
  }

  let reject = (value) => {
    if (this.PromiseState !== 'pending') return
    this.PromiseState = 'rejected'
    this.PromiseResult = value
    this.onRejectedCallbacks.forEach(n => n(value))
  }

  try {
    executor(resolve, reject)
  } catch (err) {
    console.log(err)
    reject(err)
  }
}

Promise.prototype.then = function (onResolveed, onRejected) {
  onResolveed = typeof onResolveed === 'function' ? onResolveed : (v) => v
    // onRejected = typeof onRejected === 'function' ? onRejected : err => { throw err }
  onRejected = typeof onRejected === 'function' ? onRejected : (e) => { throw e }

  const promise = new Promise((resolve, reject) => {
    if (this.PromiseState === 'fullfilled') {
      setTimeout(() => {
        try {
          let x = onResolveed(this.PromiseResult)
          resolvePromise(promise, x, resolve, reject)
        } catch (err) {
          reject(err)
        }
      }, 0)
    }

    if (this.PromiseState === 'rejected') {
      setTimeout(() => {
        try {
          let x = onRejected(this.PromiseResult)
          resolvePromise(promise, x, resolve, reject)
        } catch (err) {
          reject(err)
        }
      }, 0)
    }

    if (this.PromiseState === 'pending') {
      this.onResolvedCallbacks.push((v) => {
        setTimeout(() => {
          try {
            let x = onResolveed(v)
            return resolvePromise(promise, x, resolve, reject)
          } catch (err) {
            reject(err)
          }
        }, 0)
      })
      this.onRejectedCallbacks.push((v) => {
        setTimeout(() => {
          try {
            let x = onRejected(v)
            return resolvePromise(promise, x, resolve, reject)
          } catch (err) {
            reject(err)
          }
        }, 0)
      })
    }
  })
  return promise
}

// 返回一个新的promise，根据 onRejected 的返回结果决定返回promise的状态
Promise.prototype.catch = function (onRejected) {
  return this.then(undefined, onRejected)
}

// 表示前面的promise无论成功还是失败都会执行finally方法
//   当无论如何必须要处理一个逻辑的时候使用，如果返回成功的promise不影响整个then链的结果
// callback
//  1. 调用callback不会传递参数（无法拿到前面promise的返回值）
//  2. callback最终在then的参数函数中被调用
//  3. callback返回一个promise（如果不是则用Promise.resolve转换为promise），且会等待这个promise返回
// finally值传递规则
//  调用then方法返回一个promise，根据callback的执行结果决定自己的状态和值
//   1. 如果callback返回的promise成功，则finally返回成功的promise，值为前面promise的成功结果，传递下去（遵循 then 的链式调用原理）
//   2. 如果callback返回的promise失败，则finally返回失败的promise，值为callback返回promise的失败原因，取代并传递下去（遵循 then 的链式调用原理）
//   3. 如果callback执行报错，则被当前then回调的try-catch捕获，finally返回失败的promise，值为报错原因，取代并传递下去

Promise.prototype.finally = function (call) {
  console.log('=============')
  return this.then(resolve => {
    return Promise.resolve(call()).then(() => resolve)
  }, reject => {
    return Promise.resolve(call()).then(() => {
      throw reject
    })
  })
}


// 将当前值转换为promise对象：Promise.resolve([value])
// 参数:
//  1. 是一个promise实例，则直接原样返回
//  2. 是一个thenable对象，则异步调用其then方法,决定resolve返回promise的状态
//    2.1 Promise.resolve([thenable]) 可能会返回一个失败的promise
//  3. 不是thenable对象或promise实例，则返回一个新的成功的promise，值为该参数
//  4. 不传参数，返回一个新的成功的promise，值为undefined

Promise.resolve = function (value) {
  if (value instanceof Promise) return value
  return new Promise((reslove, reject) => {
    setTimeout(() => {

      if (isPromise(value) && typeof value.then === 'function') {
        try {
          value.then(reslove, reject)
        } catch (error) {
          reject(error)
        }
      } else {
        reslove(value)
      }

    }, 0)
  })
}
// 将当前值转换为一个失败的promise对象：Promise.reject([value])
Promise.reject = function (value) {
  return new Promise((resolve, reject) => {
    reject(value)
  })
}

Promise.all = function (promises) {
  return new Promise((reslove, reject) => {
    if (promises.length === 0) reslove([])
    let i = 0
    const arr = []
    for (let index = 0; index < promises.length; index++) {
      const element = promises[index];
      Promise.resolve(element).then((v) => {
        i++
        arr[index] = v
        if (i === promises.length) {
          reslove(arr)
        }
      }, err => {
        reject(err)
      })
    }
  })
}