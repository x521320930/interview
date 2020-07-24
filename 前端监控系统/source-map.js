const sourceMap = require('source-map')
const fs = require('fs')

const file = fs.readFileSync('./album.bffb6c76.js.map').toString()
// 传入要查找的行列数，查找到压缩前的源文件及行列数
sourceMap.SourceMapConsumer.with(file,null, async (consumer) => {
  // console.log(consumer)
  // 传入要查找的行列数，查找到压缩前的源文件及行列数
  // line 压缩后的行数
  // column 压缩后的列数
  const sm = consumer.originalPositionFor({
    line: 1,
    column: 2000
  })
  // 压缩前的所有源文件列表
  const sources = consumer.sources;
  // 根据查到的source，到源文件列表中查找索引位置
  var smIndex = sources.indexOf(sm.source)

  // 到源码列表中查到源代码
  var smContent = consumer.sourcesContent[smIndex];
  // 将源代码串按"行结束标记"拆分为数组形式
  const rawLines = smContent.split(/\r?\n/g);
  // 输出源码行，因为数组索引从0开始，故行数需要-1
  console.log(rawLines)
})
