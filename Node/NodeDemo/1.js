


function axios() {
  return new Promise((reslove) => {
    setTimeout(() => reslove('成功'), 2000)
  })
}
let i = 1

function post () {
  return axios().then((res) => isDe(res)).then((res) => {
    console.log(res, 2)
    return res
  }).then((res) => {
    console.log(res, 3)
    return res
  })
}


function isDe(res) {
  console.log('let', i)
  console.log(res, 1)
  i++
  if (i < 2) {
    return post()
  } else if (i >= 2) {
    return post()
  } else {
    return res 
  }
}
post().then(() => {
  console.log(111)
})