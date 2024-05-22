/*
 * @Author: zt zhoutao@ydmob.com
 * @Date: 2024-05-20 18:25:06
 * @LastEditors: zt zhoutao@ydmob.com
 * @LastEditTime: 2024-05-22 17:12:23
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
      'backgroundColor': {
        "custom-gray2": '#424242',
        "custom-gray": '#333',
      },
      'height': {
        40: '40px',
        100: '100px'
      },
      width: {
        1226: '1226px',
        120: '120px',
        320: '320px'
      },
      'textColor': {
        'custom-light-gray': '#b0b0b0',
        'custom-gray': '#424242',
      },
      lineHeight: {
        100: '100px'
      },
      borderColor: {
        "custom-gray2": '#424242',
        "custom-gray": '#333',
      },
      marginLeft: {
        13: '13px',
      },
      zIndex: {
        50: 50
      },
      padding: {
        7: '7px'
      }
    },
  },
  variants: {
    extends: {
      display: ['group-hover'],
      textColor: ['group-hover'],
      backgroundColor: ['group-hover']
    }
  },
  plugins: [],
}