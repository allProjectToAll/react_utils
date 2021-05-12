import React, { useState } from 'react';

// 两个参数：一个是变量，一个是函数。useState是hook，传入的参数是变量的默认值  //const [count, setCount] = useState(0);

function UseState() {
    const [count, setCount] = useState(0);//count类似于state内的值，setCount就是一个自定义的方法，可以改变count的方法
    const [name, setName] = useState('Tom');//name类似于state内的值，setName就是一个自定义的方法，可以改变name的方法
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
 
export default UseState;