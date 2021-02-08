# 浏览器是如何渲染UI的
1. 浏览器获取HTML⽂件，然后对⽂件进⾏解析，形成DOM Tree 
2. 与此同时，进⾏CSS解析，⽣成Style Rules 
3. 接着将DOM Tree与Style Rules合成为 Render Tree 
4. 接着进⼊布局（Layout）阶段，也就是为每个节点分配⼀个应出现在屏幕上的确切坐标 
5. 随后调⽤GPU进⾏绘制（Paint），遍历Render Tree的节点，并将元素呈现出来



