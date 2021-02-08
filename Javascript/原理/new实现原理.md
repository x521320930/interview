#### new 实现原理
> new 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例

```js

/* 
 * 内置NEW的实现原理 
 * @params
 *  Func：操作的那个类
 *  ARGS：NEW类的时候传递的实参集合
 * @return
 *  实例或者自己返回的对象
 */
function _new(Func, ...args) {
  //默认创建一个实例对象（而且是属于当前这个类的一个实例）
  // let obj = {};
  let obj = Object.create(Func.prototype);

  //也会把类当做普通函数执行
  //执行的时候要保证函数中的this指向创建的实例
  let result = Func.call(obj, ...args);

  //若客户自己返回引用值，则以自己返回的为主，否则返回创建的实例
  if ((result !== null && typeof result === "object") || (typeof result === "function")) {
    return result;
  }
  return obj;
}

```