
// redux的时候返回的state是什么

import React, { useState } from 'react';

const initialState = {count:0};
export default function UseReducer(){
                
    // const [state,dispatch] = useReducer(reducer,initState);
    const [state,setState] = useState(initialState)
    return (
        <div>
            <p>{state.count}</p>
            <button onClick={()=>{setState({count:"reset"})}}>重置</button>
            <button onClick={()=>{setState({count:"add"})}}>加一</button>
            <button onClick={()=>{setState({count:"reduce"})}}>减一</button>
            <button onClick={()=>{setState({count:"no"})}}>减一yi</button>
        </div>
    )
}



