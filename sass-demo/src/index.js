/*
 * @Author: zt zhoutao@ydmob.com
 * @Date: 2024-05-08 19:19:45
 * @LastEditors: zt zhoutao@ydmob.com
 * @LastEditTime: 2024-05-08 19:22:25
 * @FilePath: /CSS-engineering/sass-demo/src/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 读取 scss 文件
// 调用 sass 依赖提供的 complie 进行文件的编译
// 最终在 dist 目录下面新生成一个 index.css（编译后的文件
const sass = require('sass');
const path = require('path');
const fs = require('fs');

// 定义一下输入和输出的文件路径
const scssPath = path.resolve("src", "index.scss");
const cssDir = "dist"; // 之后编译的 index.css 要存储的目录名
const cssPath = path.resolve(cssDir, "index.css");

// 编译
const result = sass.compile(scssPath);
console.log(result.css);

// 将编译后的字符串写入到文件里面
if(!fs.existsSync(cssDir)){
    // 说明不存在，那就创建
    fs.mkdirSync(cssDir);
}

fs.writeFileSync(cssPath, result.css);