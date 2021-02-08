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
#### 2. 组件化实战


 

