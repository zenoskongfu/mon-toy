# mon-toy

这是一个模仿nodemon的小玩具，所以叫mon-toy

## 安装

npm i node-mon -g

## cli

在终端的任意目录中：

```shell
mon-toy test.js
```

支持传入额外的参数给被执行的文件：

```shell
mon-toy test.js 1 2
```

还可以通过 `-w` 指定监听的文件，`-f` 指定运行的文件：

```shell
mon-toy -f test.js 1 2 -w add.js
```
> 当 `add.js` 文件发生变化后，mon-toy会重新执行 `test.js` 文件


## api

```js
const monToy = require('mon-toy');

monToy({
  fileName: './test.js',
  fileArgs:[1,2], 
  watch:'add.js'
})

```

## 更多

更多内容推荐阅读这篇文章：https://juejin.cn/post/7391699424844562483