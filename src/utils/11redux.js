
// 1.redux
    // 1.安装 npm install redux --save

    // 2.编写
        // 1).新建一个store文件，引入 createStore
        // 2).写一个reducer方法
        // 3).定义一个变量去createStore上面的方法

    //3.组件调用的时候
        // 1).引入store文件
        // 2).store.getState()获取store文件里面的state值，（相当于存储在state内的数据，去获取出来）
        // 3).store.dispatch(参数)，调用store文件里面的reducer方法，能直接改变store内的state值
    //4.组建渲染：
        // 1).需要把dom渲染包在一个函数里面，作为下面的参数
        // 2).这个组建在被渲染的时候需要被订阅一下。store.subscribe()，参数就是上面的函数变量
        // 如下：
            // const render=()=>{
            //     ReactDOM.render(<App />,
            //         document.getElementById('root')
            //     );
            // }
            // store.subscribe(render)
            // render();//初始化调用


// 2.react-redux
        // 装饰器写法
        // 解释：1.安装 npm install react-redux --save    安装： npm install --save prop-types
            //  2.新建store文件，内容如redux一样
            // 3.组件内引入 connect
            // 4.写两个方法，如下@connect包裹把state和dispatch都转化成props了
            // 5.调用的话，state调用：this.props.count。方法：this.props.add()
            // 6.在组件被render的地方：
                    // 1).import {Provider} from 'react-redux'; 和  import store from '......./store';
                    // 2).用provider标签包裹：
                    //     ReactDOM.render(
                    //         <Provider  store={store}>
                    //             <App />
                    //         </Provider>
                    //     ,
                    //     document.getElementById('root')
                    //   );

//3.异步操作：===>见：components/redux/redux-thunk文件内演示
    //0.store.js文件同上，下面均在react-redux的基础上添加
    //1. //redux-thunk:安装：npm install redux-thunk --save
        //redux-logger:安装：npm install redux-logger --save
    //2.store.js内引入：(引入logger的时候，组件操作会自动打印日志)
        // import { applyMiddleware } from 'redux'
        // import logger from 'redux-loggger'
        // import thunk from 'redux-thunk'
    //3.store.js内：createStore的第二个参数要是applyMiddleware，而且applyMiddleware的参数是异步加载的thunk和自动打印日志的logger
        //const store = createStore(FirstReducer,applyMiddleware(thunk,logger));
    //4.在组件内调用是：在装饰器@connect下面写个异步方法，然后直接调用  this.props.asyncAdd()


//4. 总结：统一管理  见：components/redux/store2.js
    // 1.把原来store.js里面的方法拿到store2里面（第一步有说明store文件怎么创建的）
    // 2.把原来组件里面的装饰器里面的调用方法也拿到store2里面
    // 3.再分别导出去  export {FirstReducer,add,reduce,asyncAdd}
    // 4.在 组件redux-thunk2 里面引入{add,reduce,asyncAdd}，并使用
    // 5.把store里面的引入全部放入根目录的index.js里面 
        // import { createStore, applyMiddleware } from 'redux';
        // import logger from 'redux-logger'
        // import thunk from 'redux-thunk'
    // 6.把 const store = createStore(FirstReducer,applyMiddleware(thunk,logger)); 也移动到根目录的index.js里面，FirstReducer是store里面的方法，用applyMiddleware中间键会异步加载，传入logger参数时组件操作会自动打印日志,参数thunk表示异步加载






