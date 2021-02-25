import React, { useContext } from 'react';

export default function UseContext2({Context}){//将参数结构出来，当作行参,子组建直接获取
    const cxt = useContext(Context);
    return (
        <div>
            <p>我是{cxt.name}----今年{cxt.age}</p>
        </div>
    )
}