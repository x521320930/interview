
let uid = 0
export default class Dep {
  constructor () {
    this.id = uid++
    // 存放 watcher的实例
    this.subs = []
  }

  addSub (sub) {
    this.subs.push(sub)
  }

  depend () {
    // Dep.target就是一个我们自己指定的全局的位置，你用window.target也行，只要是全剧唯一，没有歧义就行
    if (Dep.target) {
      this.addSub(Dep.target);
    }
  }

  notify () {
    console.log('我是notify');
    // 浅克隆一份
    const subs = this.subs.slice();
    console.log(subs)
    // 遍历
    for (let i = 0, l = subs.length; i < l; i++) {
      subs[i].update();
    }
  }
}


Dep.target = null

const targetStack = []

export function pushTarget (target) {
  targetStack.push(target)
  Dep.target = target
}

export function popTarget () {
  Dep.target = targetStack[targetStack.length - 1]
  console.log(targetStack[targetStack.length - 1], 'popTarget')
}