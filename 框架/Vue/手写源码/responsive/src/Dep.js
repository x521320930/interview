

let uid = 0
export default class Dep {
  constructor () {

    this.id = uid

    this.subs = []
  }

  addSub (sub) {
    this.subs.push(sub)
  }

  depend (sub) {
    if (Dep.target) {
      Dep.target.addDep(this)
    }
  }
}