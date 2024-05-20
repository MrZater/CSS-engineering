/*
 * @Author: zt zhoutao@ydmob.com
 * @Date: 2024-05-20 17:37:27
 * @LastEditors: zt zhoutao@ydmob.com
 * @LastEditTime: 2024-05-20 17:49:31
 * @FilePath: /CSS-engineering/cube-3d/src/build-style.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const sass = require('sass')
const path = require('path')
const fs = require('fs')
const postcss = require('postcss')
const stylelint = require('stylelint')
const cssnano = require('cssnano')
const autoprefixer = require('autoprefixer')

const scssPath = path.resolve(__dirname, 'index.scss')
const outputPath = path.resolve(__dirname, 'build.css')

const result = sass.compile(scssPath)


postcss([stylelint({
    fix: true,
}), autoprefixer, cssnano])
.process(result.css, { from: undefined }).then(res=> {
    fs.writeFileSync(outputPath, res.css)
    console.log('文件后处理完毕')
}).catch((err)=>{
    console.log(err)
})