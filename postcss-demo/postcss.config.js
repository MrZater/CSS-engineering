const autoprefixer = require("autoprefixer");

/*
 * @Author: zt zhoutao@ydmob.com
 * @Date: 2024-05-17 19:24:36
 * @LastEditors: zt zhoutao@ydmob.com
 * @LastEditTime: 2024-05-17 19:48:47
 * @FilePath: /CSS-engineering/postcss-demo/postcss.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
    plugins: [
        autoprefixer({
            overrideBrowserslist: 'last 10 versions'
        })
    ],
    
    
}