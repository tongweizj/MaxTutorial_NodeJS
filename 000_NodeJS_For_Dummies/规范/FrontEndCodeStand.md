# 基本规范


## 命名规范

### 命名分类

- camelCase（驼峰式，也叫小驼峰命名，e.g. userInfo）
- PascalCase（帕斯卡命名式，也叫大驼峰命名，e.g. UserInfo）
- kebab-case（短横线连接式，e.g. user-info）
- snake_case（下划线连接式，e.g. user_info）

### 项目命名

全部采用小写方式， 以下划线分隔。 例：snake_case

#### 目录命名

组件目录使用PascalCase，其他目录统一使用kebab-case风格

### HTML命名

单数复数使用kebab-case.js风格

#### CSS命名

统一使用snake_case.css

HTML命名
统一使用snake_case.html

Vue Router 规范

router path采用kebab-case格式。


用下划线（如：/user_info）或camelCase（如：/userInfo)的单词被当成一个单词，搜索引擎无法区分语义。


router name采用kebabCase格式。
```

// bad
{
    path: '/user_info', // user_info当成一个单词
    name: 'UserInfo',
    component: UserInfo,
    meta: {
    title: ' - 用户',
    desc: ''
    }
},

// good
{
    path: '/user-info', // 能解析成user info
    name: 'UserInfo',
    component: UserInfo,
    meta: {
    title: ' - 用户',
    desc: ''
}
组件开发规范
1. 注册组件
注册组件的时候，全部使用 PascalCase 格式。
import UserBook from './user/UserBook'
2. props 命名规范

在声明prop的时候，其命名应该始终使用camelCase，而在模板中应该始终使用kebab-case

<welcome-message greeting-text="hi"></welcome-message>

<script>
  props: {
    greetingText: String;
  }
</script>



prop定义应该尽量详细
1.申明类型type（必填）
2.提供默认值（必填
3.校验类型(可选)


// bad 这样做只有开发原型系统时可以接受
props: ['status']

// good
props: {
 status: {
   type: String,
   required: true,
   default: ''
   }
 }
}
methods 命名规范

驼峰式命名camelCase，操作性函数统一使用动词或者动词+名词形式

jumpPage() {

}

openCarInfoDialog () {
    
}

请求数据方法，以 data 结尾

getListData () {
 
}

postFormData () {
    
}

注: 尽量使用常用单词开头（set、get、go、can、has、is）

附： 函数方法常用的动词:
get 获取/set 设置,
add 增加/remove 删除
create 创建/destory 移除
start 启动/stop 停止
open 打开/close 关闭,
read 读取/write 写入
load 载入/save 保存,
create 创建/destroy 销毁
begin 开始/end 结束,
backup 备份/restore 恢复
import 导入/export 导出,
split 分割/merge 合并
inject 注入/extract 提取,
attach 附着/detach 脱离
bind 绑定/separate 分离,
view 查看/browse 浏览
edit 编辑/modify 修改,
select 选取/mark 标记
copy 复制/paste 粘贴,
undo 撤销/redo 重做
insert 插入/delete 移除,
add 加入/append 添加
clean 清理/clear 清除,
index 索引/sort 排序
find 查找/search 搜索,
increase 增加/decrease 减少
play 播放/pause 暂停,
launch 启动/run 运行
compile 编译/execute 执行,
debug 调试/trace 跟踪
observe 观察/listen 监听,
build 构建/publish 发布
input 输入/output 输出,
encode 编码/decode 解码
encrypt 加密/decrypt 解密,
compress 压缩/decompress 解压缩
pack 打包/unpack 解包,
parse 解析/emit 生成
connect 连接/disconnect 断开,
send 发送/receive 接收
download 下载/upload 上传,
refresh 刷新/synchronize 同步
update 更新/revert 复原,
lock 锁定/unlock 解锁
check out 签出/check in 签入,
submit 提交/commit 交付
push 推/pull 拉,
expand 展开/collapse 折叠
begin 起始/end 结束,
start 开始/finish 完成
enter 进入/exit 退出,
abort 放弃/quit 离开
obsolete 废弃/depreciate 废旧,
collect 收集/aggregate 聚集

多个属性的标签元素规范
<!-- bad -->
<img src="https://user-gold-cdn.xitu.io/2020/4/27/171bab9e9687bb00?w=400&h=400&f=png&s=3451" alt="Vue Logo">
<my-component foo="fooattribute" bar="barattribute" baz="bazattribute"></my-component>

<!-- good -->
<img
  src="https://user-gold-cdn.xitu.io/2020/4/27/171bab9e9687bb00?w=400&h=400&f=png&s=3451"
  alt="Vue Logo"
>
<my-component
  foo="fooattribute"
  bar="barattribute"
  baz="bazattribute"
>
</my-component>

元素属性的顺序
原生属性放前面，指令放后面
  - class
  - id,ref
  - name
  - data-*
  - src, for, type, href,value,max-length,max,min,pattern
  - title, alt，placeholder
  - aria-*, role
  - required,readonly,disabled
  - is
  - v-for
  - key
  - v-if
  - v-else-if
  - v-else
  - v-show
  - v-cloak
  - v-pre
  - v-once
  - v-model
  - v-bind,:
  - v-on,@
  - v-html
  - v-text
指令规范

指令有缩写则一律采用缩写形式

// bad
v-bind:code="code"
v-on:click="getUserData"

// good
:code="code"
@click="getUserData"

v-for 循环必须加上 key 属性，在整个 for 循环中 key 需要唯一，添加key可提高性能

<!-- bad -->
<ul>
    <li v-for="todo in todos">
      {{ todo.text }}
    </li>
</ul>

<!-- good -->
<ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.text }}
    </li>
</ul>

避免 v-if 和 v-for 同时用在一个元素上（性能问题）

出现这样的需求，有两种解决方案：
1.将数据替换为一个计算属性，让其返回过滤后的列表
 <!-- bad -->
  <ul>
    <li v-for="user in users" v-if="user.isActive" :key="user.id">
      {{ user.name }}
    </li>
  </ul>

  <!-- good -->
  <ul>
    <li v-for="user in activeUsers" :key="user.id">
      {{ user.name }}
    </li>
  </ul>

  <script>
  computed: {
    activeUsers: function () {
      return this.users.filter(function (user) {
        return user.isActive
      })
    }
  }
  </script>
2.将 v-if 移动至容器元素上 (比如 ul, ol)
  <!-- bad -->
  <ul>
    <li v-for="user in users" v-if="shouldShowUsers" :key="user.id">
      {{ user.name }}
    </li>
  </ul>

  <!-- good -->
  <ul v-if="shouldShowUsers">
    <li v-for="user in users" :key="user.id">
      {{ user.name }}
    </li>
  </ul>
SASS规范
语法选用
SASS有两种语法格式，一种是 SCSS (Sassy CSS)，另一种是缩进格式（Indented Syntax），有时称之为 Sass。
团队约定
考虑到 SCSS 语法对 CSS 语法友好的兼容性和扩展性，我们在使用 SASS 编写样式的时候，统一使用 SCSS 语法
注释
SASS支持 CSS 标准的多行注释 /* */，同时也支持单行注释 //。


多行注释在使用非 Compressed 模式进行编译后的输出文件中会保留下来，单行注释 // 侧会被移除


多行注释和单行注释在 SASS 编译后输出的压缩 CSS 文件都会被移除


当多行注释内容第一个字符是感叹号 “!” 的时候，即 /*! */，SASS 无论用哪一种编译方式编译注释都会保留


注释内容可以加入 SASS 变量


团队约定


全部遵循 CSS 注释规范


不使用 /*! */ 注释方式


注释内不放 SASS 变量


@charset "UTF-8";

/**
 * @desc File Info
 * @author liqinuo
 * @date 2015-10-10
 */

/* Module A
----------------------------------------------------------------*/
.mod_a {}

/* module A logo */
.mod_a_logo {}

/* module A nav */
.mod_a_nav {}


/* Module B
----------------------------------------------------------------*/
.mod_b {}

/* module B logo */
.mod_b_logo {}

/* module B nav */
.mod_b_nav {}
嵌套规范
选择器嵌套
/* CSS */
.jdc {}
body .jdc {}

/* SCSS */
.jdc {
    body & {}
}
属性嵌套
/* CSS */
.jdc {
    background-color: red;
    background-repeat: no-repeat;
    background-image: url(/img/icon.png);
    background-position: 0 0;
}

/* SCSS */
.jdc {
    background: {
        color: red;
        repeat: no-repeat;
        image: url(/img/icon.png);
        position: 0 0;
    }
}
变量
可复用属性尽量抽离为页面变量，易于统一维护
// CSS
.jdc {
    color: red;
    border-color: red;
}

// SCSS
$color: red;
.jdc {
    color: $color;
    border-color: $color;
}
混合(mixin)
根据功能定义模块，然后在需要使用的地方通过 @include 调用，避免编码时重复输入代码段
// CSS
.jdc_1 {
    -webkit-border-radius: 5px;
    border-radius: 5px;
}
.jdc_2 {
    -webkit-border-radius: 10px;
    border-radius: 10px;
}

// SCSS
@mixin radius($radius:5px) {
    -webkit-border-radius: $radius;
    border-radius: $radius;
}
.jdc_1 {
    @include radius; //参数使用默认值
}
.jdc_2 {
    @include radius(10px);
}



// CSS
.jdc_1 {
    background: url(/img/icon.png) no-repeat -10px 0;
}
.jdc_2 {
    background: url(/img/icon.png) no-repeat -20px 0;
}

// SCSS
@mixin icon($x:0, $y:0) {
    background: url(/img/icon.png) no-repeat $x, $y;
}
.jdc_1 {
    @include icon(-10px, 0);
}
.jdc_2 {
    @include icon(-20px, 0);
}
占位选择器 %
如果不调用则不会有任何多余的 css 文件，占位选择器以 % 标识定义，通过 @extend 调用
//scss
%borderbox {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.jdc {
    @extend %borderbox;
}
extend 继承
可以继承复用公共的属性
// CSS
.jdc_1 {
    font-size: 12px;
    color: red;
}
.jdc_2 {
    font-size: 12px;
    color: red;
    font-weight: bold;
}

// SCSS
.jdc_1 {
    font-size: 12px;
    color: red;
}
.jdc_2 {
    @extend .jdc_1;
    font-weight: bold;
}

// 或者
%font_red {
    font-size: 12px;
    color: red;
}
.jdc_1 {
    @extend %font_red;
}
.jdc_2 {
    @extend %font_red;
    font-weight: bold;
}
for 循环
// CSS
.jdc_1 {background-position: 0 -20px;}
.jdc_2 {background-position: 0 -40px;}
.jdc_3 {background-position: 0 -60px;}

// SCSS
@for $i from 1 through 3 {
    .jdc_#{$i} {
        background-position: 0 (-20px) * $i;
    }
}
注意： #{} 是连接符，变量连接使用时需要依赖
each 循环
// CSS
.jdc_list {
    background-image: url(/img/jdc_list.png);
}
.jdc_detail {
    background-image: url(/img/jdc_detail.png);
}

// SCSS
@each $name in list, detail {
    .jdc_#{$name} {
        background-image: url(/img/jdc_#{$name}.png);
    }
}


// CSS
.jdc_list {
    background-image: url(/img/jdc_list.png);
    background-color: red;
}
.jdc_detail {
    background-image: url(/img/jdc_detail.png);
    background-color: blue;
}

// SCSS
@each $name, $color in (list, red), (detail, blue) {
    .jdc_#{$name} {
        background-image: url(/img/jdc_#{$name}.png);
        background-color: $color;
    }
}
function 函数
@function pxToRem($px) {
    @return $px / 10px * 1rem;
}
.jdc {
    font-size: pxToRem(12px);
}
运算规范
运算符之间空出一个空格
.jdc {
    width: 100px - 50px;
    height: 30px / 5;
}
注意: 运算单位，单位同时参与运算，所以 10px 不等于 10，乘除运算时需要特别注意
// 正确的运算格式
.jdc {
    width: 100px - 50px;
    width: 100px + 50px;
    width: 100px * 2;
    width: 100px / 2;
}
小程序规范
目录、文件、组件命名规范
1. 目录
目录统一使用kebab-case风格
2. page下的文件


js类文件使用PascalCase，如UserInfo.js


其他资源文件统一使用kebab-case风格，如user-detail.js, user-detail.css, user-avatar.png


3. 组件文件

命名遵循PascalCase约定。
组件文件名除index.vue之外，一律采用PascalCase(大驼峰)写法。原因是引入组件时，组件的变量通常用PascalCase格式，以区别于一般变量。组件文件名与变量名一致，方便对应。

"usingComponents": {
  "select-store-dialog": "../login/components/SelectStoreDialog/index"
}


组件名应该始终是多个单词的,组件由多个单词组成，如BookItem，单独的Book不推荐。


组件使用遵循kebab-case 约定
在页面中使用组件需要前后闭合，并以短线分隔，如：


<user-book></user-book>

<user-book />
组件的选项顺序
页面组件
- data    (数据)
- 生命周期函数 （onLoad等）  
- 各类方法  （methods）   
自定义组件
- properties    (需要传得数据)
- data    (数据)
- 组件钩子函数 （attached等）  
- 页面钩子函数 （show等）  
- 各类方法  （methods）   
组件开发规范
1. 注册组件
注册组件的时候，全部使用 PascalCase 格式。
"usingComponents": {
    "select-store-dialog": "../login/components/SelectStoreDialog/index"
  }
2. properties 命名规范

在声明properties的时候，其命名应该始终使用camelCase，而在模板中应该始终使用kebab-case

<!--wxml-->
<welcome-message greeting-text="hi"></welcome-message>


properties定义应该尽量详细
1.申明类型type（必填）
2.提供默认值（必填)


/**
* 组件的属性列表
*/
properties: {
  content:{
    type: Object,
    value: {}
  }
}
methods 命名规范

驼峰式命名camelCase，操作性函数统一使用动词或者动词+名词形式

jumpPage() {

}

openCarInfoDialog () {
    
}

请求数据方法，以 data 结尾

getListData () {
 
}

postFormData () {
    
}

注: 尽量使用常用单词开头（set、get、go、can、has、is）

附： 函数方法常用的动词:
get 获取/set 设置,
add 增加/remove 删除
create 创建/destory 移除
start 启动/stop 停止
open 打开/close 关闭,
read 读取/write 写入
load 载入/save 保存,
create 创建/destroy 销毁
begin 开始/end 结束,
backup 备份/restore 恢复
import 导入/export 导出,
split 分割/merge 合并
inject 注入/extract 提取,
attach 附着/detach 脱离
bind 绑定/separate 分离,
view 查看/browse 浏览
edit 编辑/modify 修改,
select 选取/mark 标记
copy 复制/paste 粘贴,
undo 撤销/redo 重做
insert 插入/delete 移除,
add 加入/append 添加
clean 清理/clear 清除,
index 索引/sort 排序
find 查找/search 搜索,
increase 增加/decrease 减少
play 播放/pause 暂停,
launch 启动/run 运行
compile 编译/execute 执行,
debug 调试/trace 跟踪
observe 观察/listen 监听,
build 构建/publish 发布
input 输入/output 输出,
encode 编码/decode 解码
encrypt 加密/decrypt 解密,
compress 压缩/decompress 解压缩
pack 打包/unpack 解包,
parse 解析/emit 生成
connect 连接/disconnect 断开,
send 发送/receive 接收
download 下载/upload 上传,
refresh 刷新/synchronize 同步
update 更新/revert 复原,
lock 锁定/unlock 解锁
check out 签出/check in 签入,
submit 提交/commit 交付
push 推/pull 拉,
expand 展开/collapse 折叠
begin 起始/end 结束,
start 开始/finish 完成
enter 进入/exit 退出,
abort 放弃/quit 离开
obsolete 废弃/depreciate 废旧,
collect 收集/aggregate 聚集

多个属性的标签元素规范
<!-- bad -->
<image src="https://user-gold-cdn.xitu.io/2020/4/27/171bab9e9687bb00?w=400&h=400&f=png&s=3451" class="image-class" />
<my-component foo="fooattribute" bar="barattribute" baz="bazattribute"></my-component>

<!-- good -->
<image
  src="https://user-gold-cdn.xitu.io/2020/4/27/171bab9e9687bb00?w=400&h=400&f=png&s=3451"
  class="image-class"
>
<my-component
  foo="fooattribute"
  bar="barattribute"
  baz="bazattribute"
>
</my-component>

元素属性的顺序
官方属性放前面，自定义属性放后面，然后指令最后
  - class
  - id
  - src
  - data-*
  - wx:for
  - bind:tap
  ...

作者：肥仔快乐水
链接：https://juejin.im/post/5ea67565e51d45285215915f
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

```