# 前端练习项目-todolist

学习前端项目开发。
todolist是最近看vue2视频中的项目，这里做一个记录


## 环境搭建
- 安装 nodejs ，不赘述
- 配置 nodejs 环境变量，   
	
	> path 里添加 `nodejs安装目录\`
	
- 安装 npm
	
	> `npm install npm@4.6.1 -g`  
	> `注意：`不要安装最新版本，否则后面安装 cnpm 会有 socket 警告提示  
	> 查看 npm 版本：`npm -v`
- 设置 npm 全局安装路径和缓存路径
	
	> nodejs安装目录下创建 `node_global` 和 `node_cache` 文件夹  
	> `npm config set prefix "nodejs安装目录\node_global"`  
	> `npm config set cache "nodejs安装目录\node_cache"`

- 安装 cnpm
	
	> `npm install -g cnpm --registry=https://registry.npm.taobao.org`
- 配置 cnpm 环境变量  
	
	> path 里添加 `nodejs安装目录\node_global`
	> 查看 cnpm 版本：`cnpm -v`
- 安装 vue 脚手架
	
	> `cnpm i -g vue-cli`
	> 过程中需要选择是否安装路由，单元测试等什么的，根据情况自行选择

- 完成， 终端提示如下
	```Bash
	# Project initialization finished!
	# ========================

	To get started:

	  cd myproject
	  npm install (or if using yarn: yarn)
	  npm run dev

	Documentation can be found at https://vuejs-templates.github.io/webpack

	```

## Build Setup

``` bash
# create project 
vue init webpack myproject

# cd to project catalogue
cd myproject

# install dependencies,cd to project catalogue
cnpm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

- 报错找不到async模块等

``` bash
# 重新安装一下
cnpm install --global vue-cli 
```