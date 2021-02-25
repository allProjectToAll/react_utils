import React, { useState } from 'react';

// 两个参数：一个是变量，一个是函数。useState是hook，传入的参数是变量的默认值  //const [count, setCount] = useState(0);

function UseState() {
    const [count, setCount] = useState(0);
    return ( 
        <div>
            你点击了{count}次
            <button onClick={()=>{setCount(count+1)}}>点击</button>

        </div>
    );
}
 
export default UseState;