const { override, fixBabelImports,addBabelPlugins} = require('customize-cra');
module.exports = override(
 // 配置antd的按需加载，在这里使用 customize-cra 里的一些函数来修改配置
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css' //或者true, true代表运用less
  }),
  //配置高阶组件的装饰器
  addBabelPlugins(
    [
      "@babel/plugin-proposal-decorators",  // @babel/plugin-proposal-decorators需要在@babel/plugin-proposal-class-properties之前
      {
        "legacy": true // 推荐
      }
    ]
  )

);