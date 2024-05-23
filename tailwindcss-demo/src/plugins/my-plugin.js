/*
 * @Author: zt zhoutao@ydmob.com
 * @Date: 2024-05-23 17:15:42
 * @LastEditors: zt zhoutao@ydmob.com
 * @LastEditTime: 2024-05-23 17:56:33
 * @FilePath: /CSS-engineering/tailwindcss-demo/src/plugins/my-plugin.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = function ({
    addUtilities
}) {
    const newUtilities = {
        '@keyframes slide': {
            "0%": {
                transform: "translateX(0)",
                filter: "brightness(1)",
            },
            "100%": {
                transform: "translateX(236px)",
                filter: "brightness(1.45)",
            },
        },
        '.slide': {
            'animation': "slide 1.5s ease-in-out infinite alternate"
        }
    }
    for (let i = 1; i <= 4; i++) {
        newUtilities[`@keyframes jump-off-${i}`] = {
            "0%": {
                transform: "rotate(0deg)"
            },
            [`${15*i}%`]: {
                transform: "rotate(0deg)"
            },
            [`${20+ 15*i}%`]: {
                transformOrigin: "-50% center",
                transform: "rotate(-180deg)",
            },
            "100%": {
                transformOrigin: "-50% center",
                transform: "rotate(-180deg)",
            },
        }
        newUtilities[`@keyframes jump-down-${i}`] = {
            [`${5+15*(i-1)}%`]: {
                transform: "scale(1, 1)"
            },
            [`${15+15*(i-1)}`]: {
                transformOrigin: "center bottom",
                transform: "scale(1.3, 0.7)",
            },
            [`${20+15*(i-1)}%`]: {
                transformOrigin: "center bottom",
                transform: "scale(0.8, 1.4)",
            },
            [`${25+15*(i-1)}%`]: {
                transformOrigin: "center bottom",
                transform: "scale(0.8, 1.4)",
            },
            [`${40+ 15*(i-1)}%`]: {
                transformOrigin: "center top",
                transform: "scale(1.3, 0.7)",
            },
            [`${55+ 15*(i-1)}%`]: {
                transform: "scale(1, 1)"
            },
            "100%": {
                transform: "scale(1, 1)"
            },
        }
        newUtilities[`.jump-off-${i}`] = {
            animation: `jump-off-${i} 1.5s ease-in-out infinite alternate`
        }
        newUtilities[`.jump-down-${i}`] = {
            animation: `jump-down-${i} 1.5s ease-in-out infinite alternate`
        }
    }
    addUtilities(newUtilities)
}