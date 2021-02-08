#### call、apply、bind 实现原理

##### call apply
> call() 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数。（MDN: [https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call]）
> 该方法的语法和作用与 apply() 方法类似，只有一个区别 参数是一个数组
```js
// 简单的分析一下Call 做什么事情
// 1. 改变this 指向 (需要一个对象， 如果不是对象 要把他改变成对象)
// 2. 传递带个和多个实参 
// 3. 返回执行之后的结果
function myCall (ctx, ...arg) {
  // 先判断是否为空，如果为空 或 当前 ctx 指向 window
  if (ctx === null || ctx === undefined) ctx = window
  // 判断不是转换成对象  
  if (typeof ctx !== 'object' || typeof ctx !== 'function') {
    // 找到当前封装的类
    ctx = new (ctx).constructor(ctx)
  }
  // ctx增加一个属性fn 并把this(当前调用的函数)赋给 fn
  ctx.fn = this 
  // 执行改变this指向的函数
  const res = ctx.fn(...arg)
  // 删除掉新增的属性fn
  delete ctx.fn
  // 返回执行结果
  return res
}

```

##### bind
> bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。

```js

function myBind () {
  const s = Array.prototype.silce(arguments, 1)
  const fn = this
  const ctx = arguments[0]
  return function () {
    const arr = s.concat(Array.prototype.silce(arguments))
    return fn.apply(ctx, arr)
  }
}
```
  