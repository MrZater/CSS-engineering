/*
 * @Author: zt zhoutao@ydmob.com
 * @Date: 2024-05-24 17:32:12
 * @LastEditors: zt zhoutao@ydmob.com
 * @LastEditTime: 2024-05-24 17:39:07
 * @FilePath: /CSS-engineering/tailwindcss-demo/postcss.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const tailwindcss = require('tailwindcss');
const cssnano = require('cssnano');
module.exports ={
    plugins: [
        tailwindcss,
        cssnano({
            preset: 'default'
        })
    ].filter(Boolean)
}