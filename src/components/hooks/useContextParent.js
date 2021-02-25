import React, { useContext } from 'react';
import UseContextChild from './useContextChild'

// 解释：
// 1.在函数外层定义一个变量去创建一个对象，函数内部定义一个变量且用useContext去接受这个变量，就可以直接用。
// 2.在子组建上当作属性传递
//相当于数据传递。也可用于，定义一个unity.js文件，把const Context = React.createContext({name:"Tim",age:"18"})作为全局变量抛出去，然后别的文件内接受

const Context = React.createContext({name:"Tim",age:"18"})
function UseContext(){
    const cxt = useContext(Context);
    return (
        <div>
            <p>我是{cxt.name}----今年{cxt.age}</p>

            下面是子组建：
            <UseContextChild Context={Context}></UseContextChild>
        </div>
    )
}

export default UseContext;