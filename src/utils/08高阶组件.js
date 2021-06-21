// 高阶组件 名称一般以with开头， 见===》（components/HOC/...    ）

// 1.传入一个组件，返回一个新的组件，原本调用的属性可以获取到，高阶组件内部独有的属性也可以获取到
// 解释：就是重新写一个函数组建，把原有的class组件当作参数传进去当作一个dom，然后再在该dom中加上新的属性

// 2.重写生命周期，（重新生命周期需要class组建）
// 解释：就是重写一个函数组建，在组件内部定义一个新的class组建，然后传入所有的属性，然后可以写生命周期，然后返回这个class组件

// 3.装饰器语法：（注意：安装完成之后如果npm start有问题，需要重新安装包）
    // 1).npm install --save-dev @babel/plugin-proposal-decorators
    // 2).更改配置文件，在config-overrides中，增加变量 addBabelPlugins,
        //import 引入 addBabelPlugins
        // addBabelPlugins(
        //     [
        //     "@babel/plugin-proposal-decorators",
        //     {
        //         "legacy": true // 推荐
        //     }
        //     ]
        // )
    // 3).使用：用@高阶组件名称使用，高阶组件必须写在原有组件的上面。
