/*
 * @Author: zt zhoutao@ydmob.com
 * @Date: 2024-05-17 18:41:12
 * @LastEditors: zt zhoutao@ydmob.com
 * @LastEditTime: 2024-05-20 16:12:44
 * @FilePath: /CSS-engineering/postcss-demo/src/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const fs = require('fs')
const postcss = require('postcss')
const autoprefixer = require('autoprefixer')
const style = fs.readFileSync('src/index.css', 'utf8')
const myPlugin = require('./my-plugin')
postcss([myPlugin])
    .process(style, {
        from: undefined
    })
    .then(res => {
        console.log(res.css)
    })