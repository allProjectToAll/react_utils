import React,{useContext} from 'react';
import {ColorContext,UPDATE_COLOR} from './colorContext'



function Buttons(){
    const { dispatch } = useContext(ColorContext);//这里接收父组件的方法 dispatch
    return (
        <div >
            <button onClick={()=>{dispatch({color:"red",type:UPDATE_COLOR})}}>红色</button>
            <button onClick={()=>{dispatch({color:"blue",type:UPDATE_COLOR})}}>蓝色</button>
        </div>
    )
}


export default Buttons