import React, { useState, useEffect } from 'react';

// useEffect是 componentDidMount,componentDidUpdate,componentWillUnmount这几个生命周期函数的统一
// 用法如下
// useEffect(()=>{
//     //副作用逻辑
//     // xxxxx
//     return ()=>{//return一个函数，用于组件渲染和组件卸载前执行的代码
//     }
// },[])//1.空数组表示只执行一次，即初次渲染render,相当于componentDidMount。
        //2.非空数组，useEffect会在数组发生改变后执行。
        //3.不填这个数组，useEffect每次渲染都会执行

function UseEffect() {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        document.title = `你点击了${count}次`;
    },[count])
    
    return ( 
        <div>
            你点击了{count}次
            <button onClick={()=>{setCount(count+1)}}>点击+1</button>
            <button onClick={()=>{setCount(count-1)}}>点击-1</button>

        </div>
    );
}
 
export default UseEffect;