# mon-toy

这是一个模仿nodemon的小玩具，所以叫mon-toy

This is a small toy imitating nodemon, hence called mon-toy.

## 安装 Install

```shell
npm i node-mon -g
```

## cli

在终端的任意目录中：

In any directory in the terminal:

```shell
mon-toy test.js
```

支持传入额外的参数给被执行的文件：

Supports passing additional arguments to the executed file:

```shell
mon-toy test.js 1 2
```

还可以通过 `-w` 指定监听的文件，`-f` 指定运行的文件：

You can also specify the file to watch with -w and the file to run with -f:

```shell
mon-toy -f test.js 1 2 -w add.js
```
当 `add.js` 文件发生变化后，mon-toy会重新执行 `test.js` 文件

When the add.js file changes, mon-toy will re-execute the test.js file.


## api

```js
const monToy = require('zenos-mon-toy');
const path = require('path');
monToy({
  fileName: path.resolve(__dirname,'./test.js'),
  fileArgs:[1,2], 
  watch:path.resolve(__dirname,'./add.js')
})

```

## 更多 More

更多内容推荐阅读这篇文章：https://juejin.cn/post/7391699424844562483

For more information, it is recommended to read this article: https://juejin.cn/post/7391699424844562483