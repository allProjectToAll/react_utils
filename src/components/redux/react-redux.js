import React, { Component } from 'react';
import { connect } from 'react-redux'

// 装饰器写法
// 解释：1.安装 npm install react-redux --save
       //  2.新建store文件，内容如redux一样
       // 3.组件内引入 connect
       // 4.写两个方法，如下@connect包裹把state和dispatch都转化成props了
       // 5.调用的话，state调用：this.props.count。方法：this.props.add()
       // 6.在组件被render的地方：
            // 1).import {provider} from 'react-redux'; 和  import store from '......./store';
            // 2).用provider标签包裹：
            //     ReactDOM.render(
            //         <Provider  store={store}>
            //             <App />
            //         </Provider>
            //     ,
            //     document.getElementById('root')
            //   );

//非装饰器写法
const mapStateToProps = (state,ownProps)=>{//第一个参数就是 Redux的store,第二个参数 ownProps，是组件自己的 props
    console.log(state,ownProps,'state,ownProps')
    return {
        count:state.count
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        add:()=>dispatch({type:"add"}),
        reduce:()=>dispatch({type:"reduce"})
    }
}

// 装饰器写法
// @connect(
//     state=>({count:state.count}),//这里的state是参数，store里面的形参
//     dispatch=>({
//         add:()=>dispatch({type:"add"}),//这里的dispatch是参数，store里面的形参
//         reduce:()=>dispatch({type:"reduce"}),//这里的dispatch是参数，store里面的形参
//         asyncAdd:()=>dispatch=>{
//             setTimeout(()=>{
//                 dispatch({type:"add"});//异步调用，直接写的话就会报错，需要借助thunk
//             },2000)
//         }
//     }),
// )


class FirstRedux extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                {/* 属性获取 */}
                {this.props.count}
                {/* 方法调用 */}
                <button onClick={()=>{this.props.add()}}>加一</button>
                <button onClick={()=>{this.props.reduce()}}>减一</button>

            </div>
         );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FirstRedux);
 
// 装饰器写法
// export default FirstRedux;