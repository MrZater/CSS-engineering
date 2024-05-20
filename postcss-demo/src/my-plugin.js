/*
 * @Author: zt zhoutao@ydmob.com
 * @Date: 2024-05-20 15:52:34
 * @LastEditors: zt zhoutao@ydmob.com
 * @LastEditTime: 2024-05-20 16:14:01
 * @FilePath: /CSS-engineering/postcss-demo/src/my-plugin.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const Color = require('color')
module.exports = (opts = {}) => {
    return {
      postcssPlugin: 'PLUGIN NAME',
      Once (root) {
        // Calls once per file, since every file has single Root
      },
      Declaration (decl) {
        // All declaration nodes
        // console.log(decl.prop, decl.value)
        const colorReg = /(^color)?(^background-color)?/
        if (colorReg.test(decl.prop)){
            try {
                const color = Color(decl.value)
                const hex = color.hex()
                decl.value = hex
            }catch(err) {
                console.log(err)
            }
        }
      },
      Rule (r) {
        // console.log(r.selector)
      }
    }
  }
  module.exports.postcss = true