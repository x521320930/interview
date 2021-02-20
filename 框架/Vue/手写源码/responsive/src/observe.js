import { isObject } from './utils'
import Observer from './Observer'
export default function observe (value) {
  if (!isObject(value)) return

  let ob;
  // 有Vue是有属性
  if (typeof value.__ob__ !== 'undefined') {
    ob = value.__ob__
  } else {
    ob = new Observer(value)
  }
  return ob
}