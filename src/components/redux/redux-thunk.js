import React, { Component } from 'react';
import { connect } from 'react-redux'
import {add,reduce,asyncAdd} from './store2'

@connect(
    state=>({count:state.count}),
    {add,reduce,asyncAdd},
    // dispatch=>({
        // add:()=>dispatch({type:"add"}),
        // reduce:()=>dispatch({type:"reduce"}),
        // asyncAdd:()=>{
        //     setTimeout(()=>{
        //         dispatch({type:"add"})
        //     },2000)
        // }
    // }),
)


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
                <button onClick={()=>{this.props.asyncAdd()}}>延时加一</button>

            </div>
         );
    }
}

 
export default FirstRedux;