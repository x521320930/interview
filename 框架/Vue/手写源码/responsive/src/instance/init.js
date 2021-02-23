import Watcher from '../observer/watcher'
import { initState } from './state'
import { compilerText } from '../utils/index'

export function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    const vm = this
    vm.$options = options
    // MVVM 响应式原理
    // 拦截数组方法，和 对象属性
    initState(vm) // data computed warch


    if (vm.$options.el) {
      vm.$mount()
    }
  }

  Vue.prototype.$mount = function () {
    let vm = this;
    let el = vm.$options.el // 获取元素
    // 获取当前挂载节点 vm.$el就是我要挂载的一个元素
    el = vm.$el = query(el)
    
    // 渲染师通过 Watcher 来渲染
    // vue2.0 组件级别更新 new vue 产生一个组件
    // 更新组件、渲染的逻辑
    let updateComponent = () => {
      // 更新组件
      vm._update()
    }
    // 渲染watch
    new Watcher(vm, updateComponent)
  }


  Vue.prototype._update = function () {
    // 用户传入的数据 去更新视图
    let vm = this
    let el = vm.$el;

    // 需要循环这个元素 将里面的内容
    let node = document.createDocumentFragment();
    let firstChild;
    while (firstChild = el.firstChild) {
      // 每次拿到第一个元素就将这也元素放入到文档碎片中
      node.appendChild(firstChild)
    }
    // 对文件进行替换
    compiler(node, vm)
    // 渲染
    el.appendChild(node)
  }
}


function query (el) {
  if (typeof el === 'string') {
    return document.querySelector(el);
  }
  return el
}

function compiler (node, vm) {
  let childNode = node.childNodes;
  [...childNode].forEach(child => {
    // nodeType = 1 元素
    if (child.nodeType == 1) {
      compiler(child, vm)
    }
    // nodeType = 3 文本
    else if (child.nodeType == 3) {
      compilerText(child, vm)
    }
  })
}