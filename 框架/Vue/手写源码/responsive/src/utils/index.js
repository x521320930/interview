
// 设置 不可枚举
export const def = function (obj, key, value, enumerable) {
  Object.defineProperty(obj, key, {
    value,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  })
}

export function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

// 转换TExt文本
export function compilerText (node, vm) {
  // ?: 匹配不捕获
  // + 知晓一个
  // ? 尽可能少匹配
  const defaultRE = /\{\{((?:.|\r?\n)+?)\}\}/g
  const value = node.textContent.replace(defaultRE, function (...args) {
    return getValue(vm, args[1])
  })
  node.textContent = value
}

export function getValue (vm, expr) {
  let keys = expr.split('.')
  return keys.reduce((memo, current) => {
    memo = memo[current]
    return memo
  }, vm)
}

export function parsePath (path) {
  const segments = path.split('.')
  return function (obj) {
    for (let i = 0; i < segments.length; i++) {
      if (!obj) return
      obj = obj[segments[i]]
    }
    return obj
  }
}

export function noop (a, b, c) {}