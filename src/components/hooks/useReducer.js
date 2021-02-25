import React, { useReducer } from 'react';

const initState = {count:0};
const reducer = (state,action)=>{
    //根据dispatch的action，去更新state
    switch(action.type){
        case "reset":
            return initState;
        case "add":
            return {count:state.count+1};
        case "reduce":
            return {count:state.count-1};
        default:
            return state;
    }
}


export default function UseReducer(){
    //useReducer:等号前面是形参，后面是实参。
                //1.state是状态值，这里是初始化定义的变量
                //2.dispatch是更新state的方法，接受action作为参数
                //3.reducer是一个函数，定义在外面，
                //4.initState是初始化的state的值，当前文件是上面定义的变量initState
                
    const [state,dispatch] = useReducer(reducer,initState);
    return (
        <div>
            <p>{state.count}</p>
            <button onClick={()=>{dispatch({type:"reset"})}}>重置</button>
            <button onClick={()=>{dispatch({type:"add"})}}>加一</button>
            <button onClick={()=>{dispatch({type:"reduce"})}}>减一</button>
        </div>
    )
}

