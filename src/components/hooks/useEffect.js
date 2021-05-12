import React, { useState, useEffect } from 'react';

// useEffect是 componentDidMount,componentDidUpdate,componentWillUnmount这几个生命周期函数的统一
// 用法如下
// useEffect(()=>{
//     //副作用逻辑
//     // xxxxx
//     return ()=>{//return一个函数，用于组件卸载前执行的代码
//     }
// },[])
        //1.空数组表示只执行一次，相当于componentDidMount。
        //2.非空数组，useEffect会在数组发生改变后执行。
        //3.不填这个数组，useEffect每次渲染都会执行，每次数据变化的时候都会执行,相当于componentDidUpdate

function UseEffect() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('Tom');//name类似于state内的值，setName就是一个自定义的方法，可以改变name的方法
    
    useEffect(()=>{
        document.title = `你点击了${count}次`;
        return ()=>{//返回的函数相当于 componentWillUnmount   //组建将要销毁

        }
    },[count,name])      //数组内的值表示被监听的值，只要值改变就执行里面方法，
                    //如果空数组表示都不监听，只执行一次，
                    //如果是不填第二个参数，表示全部监听，数据改变就执行函数

    function add(){
        setCount(count=>count+1)
    }
    function changeName(){
        setName("Joy")//直接修改里面的值
    }
    
    return ( 
        <div>
            你点击了{count}次
            <button onClick={add}>点击</button>

            你改变了名字{name}次
            <button onClick={changeName}>修改名称</button>

        </div>
    );
}
 
export default UseEffect;