import React, { Component } from 'react';
// import FirstRedux from './FirstRedux'
// import ReactRedux from './react-redux'
// import ReduxThunk from './redux-thunk' //中间键，异步
import ReduxThunk2 from './redux-thunk2' //中间键，异步

class Redux extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                1.第一个redux(需要打开下面的注视，把react-redux注释掉，并且把根目录的index.js里面的redux的render注视打开，react-redux的render注释掉)
                {/* <FirstRedux></FirstRedux> */}
                <br/>
                2.react-redux（装饰器写法）
                {/* <ReactRedux></ReactRedux> */}
                <br/>
                3.中间键applyMiddleware，异步
                {/* <ReduxThunk></ReduxThunk> */}
                <br/>
                4.总结：redux
                <ReduxThunk2></ReduxThunk2>



            </div>
         );
    }
}
 
export default Redux;