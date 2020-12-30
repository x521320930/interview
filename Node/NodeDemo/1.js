const fs = require('fs')

const str = 'C:/Users/52132/Desktop/im/521320930-1632459-A381E483A2087D2711662873BBB25A8B'
const data = fs.readFileSync(str)
// console.log(data.toString())
function getImageSuffix(fileBuffer) {
  // 将上文提到的 文件标识头 按 字节 整理到数组中
  const imageBufferHeaders = [
   { bufBegin: [0xff, 0xd8], bufEnd: [0xff, 0xd9], suffix: '.jpg' },
   { bufBegin: [0x00, 0x00, 0x02, 0x00, 0x00], suffix: '.tga' },
   { bufBegin: [0x00, 0x00, 0x10, 0x00, 0x00], suffix: '.rle' },
   {
    bufBegin: [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a],
    suffix: '.png'
   },
   { bufBegin: [0x47, 0x49, 0x46, 0x38, 0x39, 0x61], suffix: '.gif' },
   { bufBegin: [0x47, 0x49, 0x46, 0x38, 0x37, 0x61], suffix: '.gif' },
   { bufBegin: [0x42, 0x4d], suffix: '.bmp' },
   { bufBegin: [0x0a], suffix: '.pcx' },
   { bufBegin: [0x49, 0x49], suffix: '.tif' },
   { bufBegin: [0x4d, 0x4d], suffix: '.tif' },
   {
    bufBegin: [0x00, 0x00, 0x01, 0x00, 0x01, 0x00, 0x20, 0x20],
    suffix: '.ico'
   },
   {
    bufBegin: [0x00, 0x00, 0x02, 0x00, 0x01, 0x00, 0x20, 0x20],
    suffix: '.cur'
   },
   { bufBegin: [0x46, 0x4f, 0x52, 0x4d], suffix: '.iff' },
   { bufBegin: [0x52, 0x49, 0x46, 0x46], suffix: '.ani' }
  ]
  for (const imageBufferHeader of imageBufferHeaders) {
   let isEqual
   // 判断标识头前缀
   if (imageBufferHeader.bufBegin) {
    const buf = Buffer.from(imageBufferHeader.bufBegin)
    isEqual = buf.equals(
     //使用 buffer.slice 方法 对 buffer 以字节为单位切割
     fileBuffer.slice(0, imageBufferHeader.bufBegin.length)
    )
   }
   console.log(isEqual)
   // 判断标识头后缀
   if (isEqual && imageBufferHeader.bufEnd) {
    const buf = Buffer.from(imageBufferHeader.bufEnd)
    isEqual = buf.equals(fileBuffer.slice(-imageBufferHeader.bufEnd.length))
   }
   if (isEqual) {
    return imageBufferHeader.suffix
   }
  }
  // 未能识别到该文件类型
  return ''
 }

 const a = getImageSuffix(data)
 console.log(a)
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
// post().then(() => {
//   console.log(111)
// })

