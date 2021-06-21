// 1.（一次性安装）全局安装：npm install umi -g 

// 2.新建文件夹

// 3.进入文件夹 npm init 

// 4.添加配置
// "scripts": {
//     "start":"umi dev",
//     "build":"umi build",
//   },

// 5.新建文件夹：src

// 6.进入文件夹，新建文件：sudo umi g page index 
// (新建文件名称不加后缀，page是语法不是文件夹的名称（切记新建文件需要在src下新建，如umi g page users/_layout。不能进入users内新建_layout）)

// 7.出现 _layout.js表示是父组件页面



// 1.使用 yarn 管理 npm 依赖
    // # 国内源
    $ npm i yarn tyarn -g
    // # 后面文档里的 yarn 换成 tyarn
    $ tyarn -v
// 2.然后全局安装 umi，并确保版本是 2.0.0 或以上
    $ yarn global add umi
    $ umi -v
// 3.mkdir myapp && cd myapp
// 4.yarn create @umijs/umi-app
// 5.yarn
// 启动：yarn start