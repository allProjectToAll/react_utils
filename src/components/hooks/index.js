import React, { Component } from 'react';
import UseState from './useState'
import UseEffect from './useEffect'
// import UseContextParent from'./useContextParent'
import UseReducer from './useReducer'
// import OtherHooks from './otherHooks'

import UseReduxUseContext from './useReducer和useContext共同案例/index'

class Hook extends Component {
    // state = {  }
    render() { 
        return ( 
            <div>
                <p>这里是react的hook</p>
                【【
                1.hooks调用尽量只在顶层作用域进行，
                2.不要在循环/条件/或者嵌套函数内调用，可能会无法确保每次组件渲染时以相同的顺序调用
                3.只在函数组建内使用hooks
                】】

                1.UseState
                <UseState></UseState>
                2.UseEffect
                <UseEffect></UseEffect>
                3.useContext
                {/* <UseContextParent></UseContextParent> */}
                <br/>
                4.UseReducer
                <UseReducer></UseReducer>
                5.其他的Hooks（目前代码有报错，没找到原因，所以注视掉了）
                {/* <OtherHooks></OtherHooks> */}
                <br/>
                6.UseRedux和UseContext共同使用的demo
                <UseReduxUseContext></UseReduxUseContext>

                7.自己封装的hooks，需要用use开头





            </div>
         );
    }
}
 
export default Hook;