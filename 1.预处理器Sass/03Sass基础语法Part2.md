<!--
 * @Author: zt zhoutao@ydmob.com
 * @Date: 2024-05-09 11:48:36
 * @LastEditors: zt zhoutao@ydmob.com
 * @LastEditTime: 2024-05-10 18:39:41
 * @FilePath: /CSS-engineering/1.预处理器Sass/02Sass基础语法Part1.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
# Sass基础语法Part2

## 嵌套语法

嵌套语法也是 Sass 刚推出来的时候的一大亮点，嵌套语法让我们开发在书写 CSS 的时候节省了很多的代码量。

例如：

```scss
$color: skyblue;

.container {
  width: 500px;
  height: 500px;

  .div1 {
    color: $color;
    width: 200px;
    height: 200px;
  }

  p {
    width: 400px;
    background-color: red;
  }
}
```

```css
.container {
  width: 500px;
  height: 500px;
}
.container .div1 {
  color: skyblue;
  width: 200px;
  height: 200px;
}
.container p {
  width: 400px;
  background-color: red;
}
```

另外还支持一个 & 符号，表示和父选择器结合。如果你不写 &，那么最终编译的时候，会编译为后代选择器，如果书写了 & 符号，则会和父选择器结合到一起

```scss
a {
  color: yellow;
  &:hover {
    color: green;
  }
  &:active {
    color: red;
  }
}

div{
  width: 100px;
  height: 100px;
  &.one{
    background-color: red;
  }
}
```

```css
a {
  color: yellow;
}
a:hover {
  color: green;
}
a:active {
  color: red;
}

div {
  width: 100px;
  height: 100px;
}
div.one {
  background-color: red;
}
```

另外还允许属性的嵌套

```scss
.test {
  font: {
    family: "Helvetica Neue";
    size: 20px;
    weight: bold;
  }
}
```

```css
.test {
  font-family: "Helvetica Neue";
  font-size: 20px;
  font-weight: bold;
}
```

## 插值语法

通过 #{ } 进行插值，也就是在 #{ } 可以放入变量，回头可以解析 #{ } 变量对应的值，类似于 ES6 里面的模板字符串。

```scss
$name: foo;
$attr: border;
$base-font-size: 16px;
$line-height: 1.5;

p.#{$name} {
  color: red;
  #{$attr}-color: blue;
}
```

```css
p.foo {
  color: red;
  border-color: blue;
}
```

插值语法可以避免 Sass 去运行运算表达式（ calc ），直接编译为带有运算表达式的原生 CSS 代码。

```scss
.div1 {
  padding: calc($base-font-size * $line-height * 2);
}

.div2 {
  padding: calc(#{$base-font-size * $line-height} * 2);
}
```

```css
.div1 {
  padding: 48px;
}

.div2 {
  padding: calc(24px * 2);
}
```

插值在注释里面也是可以使用的

```scss
$author: xiejie;
/*!
  Author:#{$author}
*/
```

```css
/*!
  Author:xiejie
*/
```

## 运算

关于运算相关的一些函数：

- calc
- max 和 min
- clamp

### calc

该方法是 CSS3 提供的一个方法，用于做属性值的计算。

```scss
.container {
  width: 80%;
  padding: 0 20px;

  .element {
    width: calc(100% - 40px);
  }

  .element2{
    width: calc(100px - 40px);
  }
}
```

```css
.container {
  width: 80%;
  padding: 0 20px;
}
.container .element {
  width: calc(100% - 40px);
}
.container .element2 {
  width: 60px;
}
```

注意，在上面的编译当中，如果单位相同，Sass 在做编译的时候会直接运行 calc 运算表达式，得到计算出来的最终值，但是如果单位不相同，会保留 calc 运算表达式。

### min 和 max

min 是在一组数据里面找出最小值，max 就是在一组数据里面找到最大值。

```scss
$width1: 500px;
$width2: 600px;

.element{
  width: min($width1, $width2);
}
```

```css
.element {
  width: 500px;
}
```

### clamp

这个也是 CSS3 提供的函数，语法为：

```css
clamp(min, value, max)
```

min代表下限，max 代表上限，value 是需要限制的值。clamp 的作用就是将 value 限制在 min 和 max 之间，如果 value 小于了 min 那么就取 min 作为值，如果 vlaue 大于了 max，那么就取 max 作为值。如果value 在 min 和 max 之间，那么就返回 value 值本身。

```scss
$min-font-size: 16px;
$max-font-size: 24px;

body {
  font-size: clamp($min-font-size, 1.25vw + 1rem, $max-font-size);
}
```

```css
body {
  font-size: clamp(16px, 1.25vw + 1rem, 24px);
}
```

在上面的 CSS 代码中，我们希望通过视口宽度动态的调整 body 的字体大小。value 部分为 1.25vw + 1rem（这个计算会在浏览器环境中进行计算）。当视口宽度较小时，1.25vw + 1rem 计算结果可能是小于 16px，那么此时就取 16px。当视口宽度较大时，1.25vw + 1rem 计算结果可能大于 24px，那么此时就取 24px。如果 1.25vw + 1rem 计算值在 16px - 24px 之间，那么就取计算值结果。
