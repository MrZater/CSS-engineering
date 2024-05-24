/*
 * @Author: zt zhoutao@ydmob.com
 * @Date: 2024-05-20 18:25:06
 * @LastEditors: zt zhoutao@ydmob.com
 * @LastEditTime: 2024-05-24 10:11:53
 * @FilePath: /CSS-engineering/tailwindcss-demo/tailwind.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'src/**/*.{html,js,jsx,ts,tsx,vue}'
  ],
  theme: {
    extend: {
      fontSize: {
        50: '50px'
      },
      transitionProperty: {
        width: 'width'
      }
    },
  },
  variants: {
    extends: {
      opacity: ['peer-checked']
    }
  },
  plugins: [],
}