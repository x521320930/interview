
function Promise(executor) {
  this.PromiseState = 'pending'
  this.PromiseResult = null
  this.callBacks = []
  const _this = this
  function resolve(data) {
    if (_this.PromiseState !== 'pending') return 
    _this.PromiseState = 'fulfilled'
    _this.PromiseResult = data

    _this.callBacks.forEach((item) => {
      item.onResolve && item.onResolve(data)
    })
  }

  function reject(data) {
    if (_this.PromiseState !== 'pending') return 
    _this.PromiseState = 'rejected'
    _this.PromiseResult = data
    _this.callBacks.forEach((item) => {
      item.onReject && item.onReject(data)
    })
  }
  
  try {
    executor(resolve, reject)
  } catch (error) {
    reject(error)
  }
}

Promise.prototype.then = function (onResolve, onReject) {
  if (this.PromiseState === 'fulfilled') {
    return onResolve(this.PromiseResult)
  }

  if (this.PromiseState === 'rejected') {
    return onReject(this.PromiseResult)
  }

  if (this.PromiseState === 'pending') {
    this.callBacks.push({ onResolve, onReject })
  }
}