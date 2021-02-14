#### 1. 组件通信常用方式
##### Props
``` js
// child
props: { msg: String }
```

##### 自定义事件
``` js
// child 
this.$emit('msg', '')
// parent
<HelloWord @msg="msg"></HelloWord>
```

##### 事件总线
``` js
// Bus 事件派发、监听 回调管理
class Bus {
	constructor () {
		this.callbacks = {}
	}
	
	$on (name, fn) {
		this.callbacks[name] = this.callbacks[name] || []
		this.callbacks[name].push(fn)
	}

	$emit (name, args) {
		if (this.callbacks[name]) {
			this.callbacks[name].forEach(cb => cb(args))
		}
	}
}

// main.js 
Vue.prototype.$bus = new Bus()

this.$bus.on('msg', () => {

})

this.$bus.$emit('msg', '....')
```
>  实践中通常用Vue代替Bus，因为Vue已经实现了相应接口


##### Vuex 
>  创建唯一的全局数据管理者store，通过它管理数据并通知组件状态变更

##### $parent / \$root
兄弟组件之间通信可通过共同祖辈搭桥，```$parent``` 或 ```$root```。
```js
this.$parent.$on('msg', () => {})
this.$parent.$emit('msg', '..')
```

##### $children
父组件可以通过$children访问子组件实现铜线
```js
this.$children[0].xx = xx
```

##### $attrs \$listeners
包含了父作用域中不作为 prop 被识别 (且获取) 的 attribute 绑定 (class 和 style 除外)。当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 (class 和 style 除外)，并且可以通过 v-bind="$attrs" 传入内部组件——在创建高级别的组件时非常有用
```
<p v-bind="$attrs"></p>
```

##### $refs
获取子节点的引用
```js
<p ref="a"></p>
this.$refs.a.xx = xx
```
##### provide/inject
能够实现祖先和后代之间的传值
```js
provide () {
	return { msg: '123123' }
}

inject: [msg]
```
#### 2. v-if和v-for哪个优先级更高？如果两个同时出现，应该怎么优化得到更好的性能？
两者同级时，渲染函数如下:
```js
(function anonymous( ) { with(this){return _c('div',{attrs:{"id":"demo"}},[_c('h1',[_v("v-for和v-if谁的优先 级高？应该如何正确使用避免性能问题？")]),_v(" "), _l((children),function(child){return (isFolder)?_c('p', [_v(_s(child.title))]):_e()})],2)} })
```
两者不同级时，渲染函数如下
```js
(function anonymous( ) { with(this){return _c('div',{attrs:{"id":"demo"}},[_c('h1',[_v("v-for和v-if谁的优先 级高？应该如何正确使用避免性能问题？")]),_v(" "), (isFolder)?_l((children),function(child){return _c('p', [_v(_s(child.title))])}):_e()],2)} })
```
源码中：
```js
if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget && !state.pre) {}
```
结论:
 1. v-for 优先级更高(源码中compiler/codegen/index) genElement方法
 2. 可以嵌套一层template在这一层 使用v-if 然后在内部进行v-for循环

#### 3. Vue组件data为什么必须是个函数而Vue的根实例则没有此限制？
源码中找答案：src\core\instance\state.js - initData()

