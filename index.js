const axios = require('axios');
const fs = require('fs');
const path = require('path');
let httpUrl = 'https://sharechain.qq.com/b6ea54bf1f7ee70632b89917cdd7a832?_wv=3';
 
let dirName = path.join(__dirname,'images');
if(fs.existsSync(dirName)){
    console.log('文件夹已存在');
}else{
  fs.mkdir(dirName,()=>{
      console.log('文件夹创建成功');
  });
}
 
async function getData () {
    let htmlData = await axios.get(httpUrl);
    const reg = /http\b.*?(?:0\\)/g
    const data = htmlData.data.match(reg)
    // console.log(data)
    downLoadImg(data, 1)
}

const downLoadImg = function (data, index) {
  const item = data[index]
  if (!item) return
  const str = path.parse(item).dir
  axios.get(str + '/0', { responseType:'stream'} ).then((res)=> {
    const fileType = res.data.headers['content-type'].split('/')[1]
    const srcFile = path.join(dirName, `${Date.now()}-${index}`  + '.' + fileType)
    let stream = fs.createWriteStream(srcFile)
    res.data.pipe(stream)
    res.data.on('close',()=>{
      stream.close()
      console.log('====start=====')
      console.log(index)
      console.log('图片' + srcFile + '已经下载完成');
      console.log('====end=====')
      if (index > data.length) return
      downLoadImg(data, ++index)
    })
  }).catch((r) => {
    console.log('====start=====')
    console.log('失败：', index)
    console.log('====end=====')
    if (index > data.length) return
    downLoadImg(data, ++index)
  })
}

getData()