# koa2-mysql-server
利用koa2+mysql搭建一套简易的nodejs后台服务，用于为客户端提供数据请求的数据api接口

# 快速上手

## 环境准备
安装NodeJs
koa2下，最好安装node7.0以上版本，不然会报错，因为低版本下Koa2部分ES7的语法会不支持
安装mySql数据库
可以参考官方文档：https://www.mysql.com/downloads/

## 启动项目
```bash
npm install
npm run pm2
```

## 目录结构说明

```bash
├── bin
│   ├── index.js # 项目入口文件
│   ├── www 
├── config
│   ├── config.js # 配置项目
│   ├── db.js # 数据库配置
│   ├── redis # redis配置
│   ├── render.js # 数据接口渲染
├── app
│   ├── controllers # 操作层 执行服务端模板渲染，json接口返回数据，页面跳转
│   │   ├── admin.js
│   │   ├── index.js
│   │   ├── user.js
│   │   └── work.js
│   ├── middleware # 中间件集合
│   │   └── index.js
│   ├── models # 数据模型层 执行数据操作
│   │   └── user.js
│   ├── routers # 路由层 控制路由
│   │   ├── user.js # /user/* 子路由
│   │   ├── home.js # 主页子路由
│   │   ├── index.js # 子路由汇总文件
├── static  #静态资源
```

## 集群管理 pm2 主要特点
- 内建负载均衡（使用Node cluster 集群模块、子进程，可以参考朴灵的《深入浅出node.js》一书第九章）
- 线程守护，keep alive
- 0秒停机重载，维护升级的时候不需要停机.
- 现在 Linux (stable) & MacOSx (stable) & Windows (stable).多平台支持
- 停止不稳定的进程（避免无限循环）
- 控制台检测
- 提供 HTTP API
- 远程控制和实时的接口API ( Nodejs 模块,允许和PM2进程管理器交互 )

参考地址：https://www.jianshu.com/p/7b10123c8b88

## 线上部署
```bash
npm run pm2 # 单测, 编译 ES6/7 代码至 ES5
vim pm2.json # 检查 pm2 的配置
cp nginx.conf /etc/nginx/conf.d/YourProject.conf # 自行配置 nginx 反代
```