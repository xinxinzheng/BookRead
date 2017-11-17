# Book

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



# BM

## 项目简介
使用 Angularjs 开发的大数据运维管理平台。

## 技术简介
* [Angular](https://angularjs.org/)
* [Gruntjs](http://gruntjs.com/)

## changelog

v2.2.0

1. 适配新版UI

v2.1.0.1

1. 修复服务安装自动配置填充bug 
2. 修复组件-节点列表页排序搜索 bug
3. 修复请求列表时间计算错误问题
4. 修复节点详情页无法获取可安装组件的问题
5. 优化服务配置更新提示 
......

v2.1.0

1.修复测试提出的优化与bug

## 目录设计
* `bm_web` angularjs 相关的前端源码
	* `public` 
		* `static`
			- `css` -> less编译后文件
			- `less` -> 开发样式
			- `font` -> 使用字体
			- `img` -> 使用图标
			- `scripts`
				+ `angular` -> angularjs
				+ `config`	-> js 配置
				+ `controllers` -> 控制器
				+ `filter` -> 过滤器
				+ `directive` -> 指令
				+ `service` -> 服务
				+ ...
			- `module` 	-> 第三方库，包含css/js/html等
				+ `echarts`
				+ ....

	* `views`
		- `module` ->功能模块
			+ `AlertManage` -> 告警管理
			+ `ClusterExpand` -> 集群扩容
			+ `ClusterInit` -> 集群初始化
			+ `HostManage` -> 节点管理
			+ `Overview` -> 监控
			+ `ServiceManage` -> 服务管理
			+ `SystemManage` -> 系统管理
		- `component`  -> 组件相关
		- `common` -> 布局相关		
		- `partial`		-> 子模板
	* `web` -> 编译后的目录，直接部署到 nginx 的根目录即可
		- `module`
		- `static`
		- `common`
		- `directive`
		- `partials`
		- `module`
		- `index.html`
		- `login.html`

## 准备

首先保证开发环境中有node（v4.0+）环境，如没有，请[点击安装node](https://nodejs.org/en/)

然后在全局和项目目录同时安装grunt,执行以下代码：

    npm install -g grunt

    npm install -g grunt-cli

    npm install grunt --save-dev

## 开发

在项目根目录下执行：

    npm start

打开浏览器，访问 `http://127.0.0.1:8081/` 

## 编译生成 web 目录

**发布时直接把web下的内容拷贝到部署的网站root即可**

    grunt build

