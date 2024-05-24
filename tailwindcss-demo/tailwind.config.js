/*
 * @Author: zt zhoutao@ydmob.com
 * @Date: 2024-05-20 18:25:06
 * @LastEditors: zt zhoutao@ydmob.com
 * @LastEditTime: 2024-05-24 11:47:36
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
      backgroundColor: {
        "custom-gray": "rgb(249, 249, 249)",
        "custom-black": "#222",
        "custom-white": "#eee",
      },
      borderColor: {
        "custom-gray": "#ccc",
      },
      lineHeight: {
        50: "50px",
        80: "80px",
      },
      textColor: {
        "custom-gray": "#777",
        "custom-gray2": "#bbb",
      },
      width: {
        logo: "70px",
        "50px": "50px",
        "300vw": "300vw",
        "720px": "720px",
        "960px": "960px",
        "1140px": "1140px",
        80: "80%",
        46: "46%",
        30: "30%",
        22: "22%",
      },
      height: {
        "2px": "2px",
        "50px": "50px",
        "40vh": "40vh",
        "50vh": "50vh",
        "70vh": "70vh",
        300: "300px",
        400: "400px",
        500: "500px",
      },
      margin: {
        "50px": "50px",
        10: "10px",
      },
      padding: {
        "10vw": "10vw",
        "1.2vw": "1.2vw",
        10: "10px",
        20: "20px",
      },
      fontSize: {
        "custom-36": "36px",
      },
      screens: {
        // 下面设置的值都是大于等于该值的之后
        sm: "576px",
        lg: "992px",
        xl: "1200px",
        'max-sm': {
          'max': '576px'
        }
      },
    },
  },
  variants: {
    extends: {
      width: ["hover"],
    }
  },
  plugins: [],
}