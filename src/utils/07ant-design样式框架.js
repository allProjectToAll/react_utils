

//1. 安装：npm install antd --save 

//2.对antd进行按需加载,配置之后就不需要进行css引入
// 1）安装制定版本的，否则会报错：npm install react-app-rewired@2.0.2 --save-dev  
//修改package.json
// "script":{
//     "start":"react-app-rewired start",
//     "build":"react-app-rewired build",
//     "test":"react-app-rewired test"
// }
// 2）.在根目录创建文件 config-overrides.js
// const {override,fixBabelImports} = require('customize-cra');
// module.exports = override(
//     fixBabelImports('import',{
//         libraryName:"antd",
//         libraryDirectory:'es',
//         style:'css',
//     })
// )
// 3）.安装插件：npm add babel-plugin-import
