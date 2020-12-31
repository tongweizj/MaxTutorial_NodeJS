# HTML 规范

## 语法标准

- 缩进使用 tab（2 个空格）；
- 嵌套的节点应该缩进；
- 在属性上，使用双引号，不要使用单引号；
- 属性名全小写，用中划线（-）做分隔符；
- 要在自动闭合标签结尾处使用斜线；

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page title</title>
  </head>
  <body>
    <img src="images/image.png" alt="Image" />

    <!-- 属性名全小写，用中划线（-）做分隔符 -->
    <h1 class="hello-world">Hello, world!</h1>
  </body>
</html>
```

### 规定字符编码

通过声明一个明确的字符编码，让浏览器轻松、快速的确定适合网页内容的渲染方式，通常指定为'UTF-8'。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
  </head>
  ...
</html>
```

### 减少标签数量

```html
<!-- bad -->
<span class="avatar">
  <img src="..." />
</span>

<!-- good -->
<img class="avatar" src="..." />
```

### 语义化标签

html 的标签能使用语义化的，尽量使用语义化标签，避免一个页面都是 div 或者 p 标签

``` html

<!-- bad -->
<div>
  <p></p>
</div>

<!-- good -->
<header></header>
<footer></footer>
```

## CSS规范

### 命名

- 类名使用小写字母，以中划线分隔
- id 采用驼峰式命名

``` html
/* class */
.element-content {
  ...;
}

/* id */
#myDialog {
  ...;
}
```

### 缩进

使用 tab 缩进（2 个空格）

``` html
.element {
  border-radius: 10px;
  width: 50px;
  height: 50px;
}
```

### 分号

每个声明结束都要加分号

``` html
.element {
  border-radius: 10px;
  width: 50px;
  height: 50px;
}
```

### 注释

注释统一使用 /* */

``` html
/* 这里是注释 */
.element {
  width: 50px;
  height: 50px;
}
```

### 引号

- url 的内容要用引号
- 属性选择器中的属性值需要引号

``` html
.element:after {
  content: "";
  background-image: url("logo.png");
}

li[data-type="single"] {
  ...;
}
```
