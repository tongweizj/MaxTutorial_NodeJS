# Node.js-从零开始搭建开发环境

## 安装Node.js
官网：https://nodejs.org/

选择下载对应平台稳定版本。打开下载的pkg文件并一路点击"下一步"完成安装。

安装完成之后我们会看到Node.js与npm的安装位置：

```
## node命令安装路径
/usr/local/bin/node
## npm命令安装路径
/usr/local/bin/npm
```

## 更新npm
官网：https://www.npmjs.com/#pane-homepage-pricing

npm具有如下的特性：
```
Essential JavaScript development tools that help you go to market faster and build powerful 
applications using modern open source code.

```

更新命令行如下：
```
## 更新npm
$ [sudo] npm install -g npm
... ...
/usr/local/bin/npm -> /usr/local/lib/node_modules/npm/bin/npm-cli.js
/usr/local/bin/npx -> /usr/local/lib/node_modules/npm/bin/npx-cli.js
## 当前安装的npm版本
+ npm@6.11.3
```

## 安装nvm
官网：https://github.com/creationix/nvm

使用以下命令行安装不会成功，报出警告。
```
$ npm install -g nvm

npm WARN deprecated nvm@0.0.4: This is NOT the correct nvm. Visit http://nvm.sh and use the curl command to install it.

/usr/local/bin/nvm -> /usr/local/lib/node_modules/nvm/bin/nvm

/usr/local/lib

└── nvm@0.0.4

```

正确的安装姿势如下所示，使用curl或者wget。
```
## 使用cURL来更新nvm
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash
## 使用Wget来更新nvm
$ wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash

```

执行下面的命令移除nvm内容，并移除掉~/.profile ~/.bash_profile ~/.zshrc ~/.bashrc文件中关于nvm的配置。

```
$ cd ~
$ rm -rf .nvm
```