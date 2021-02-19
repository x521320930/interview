
export default function pick (p: Array<Promise<any>>) {
  // let i = 0
  // if (p.length == 0) return []
  // function step () {
  //   p[i].then(() => {
  //     i++
  //     if (i <= p.length) {
  //       step()
  //     }
  //   })
  // }
  // step()

  const step = (p, next) => { if (p) p.then(() => next()) }
  const run = () => step(p.shift(), run)
  return run()
}