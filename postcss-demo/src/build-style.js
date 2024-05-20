/*
 * @Author: zt zhoutao@ydmob.com
 * @Date: 2024-05-20 16:22:13
 * @LastEditors: zt zhoutao@ydmob.com
 * @LastEditTime: 2024-05-20 16:30:21
 * @FilePath: /CSS-engineering/postcss-demo/src/build-style.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const fs = require('fs');
const path = require('path');
const sass = require('sass');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

// 定义输入文件的路径
const scssPath = path.resolve(__dirname, 'index.scss')

// 编译Sass代码
const scssResult = sass.compile(scssPath)
postcss([autoprefixer, cssnano]).process(scssResult.css, {
    from: undefined
}).then(res => {
    // 输出
    fs.writeFileSync('build.css', res.css)
    console.log('css后处理完成')
}).catch(err =>{
    console.log(err)
})