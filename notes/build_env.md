## 项目环境搭建
- 安装 nodejs ，不赘述
- 配置 nodejs 环境变量，

	> path 里添加 `nodejs安装目录\`

- 安装 npm

	nodejs会自带npm。

	最新版本的npm有可能会使 cnpm 的安装产生 socket 警告提示，此时可选择安装指定版本的npm

	`npm install npm@4.6.1 -g`

	安装完成可以查看 `npm` 版本

	`npm -v`

- 设置 npm 全局安装路径和缓存路径

	```bash
	# nodejs安装目录下创建 `node_global` 和 `node_cache` 文件夹

	npm config set prefix "nodejs安装目录\node_global"
	npm config set cache "nodejs安装目录\node_cache"
	```

- 安装 cnpm

	- 安装cnpm,并使用淘宝镜像
	```
	npm install -g cnpm --registry=https://registry.npm.taobao.org
	```
	>`[注意]` path 里添加 `nodejs安装目录\node_global`,或将 `cnpm` 移动到 `npm` 同级目录下,否则无法使用 cnpm 命令

	- 查看 cnpm 版本：
	`cnpm -v`

- 安装 vue 脚手架,

	`cnpm i -g vue-cli`

## 创建项目及运行

```
# 创建项目(create project)
vue init webpack myproject
# 过程中需要选择是否安装路由，单元测试等什么的，根据情况自行选择

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

- `cnpm install`正常安装完成， 终端提示如下

```bash
# Project initialization finished!
# ========================

To get started:

	cd myproject
	npm install (or if using yarn: yarn)
	npm run dev

Documentation can be found at https://vuejs-templates.github.io/webpack
```

## 问题记录

- 报错找不到async模块等，重新安装一下 `vue-cli`
	`cnpm install --global vue-cli `




