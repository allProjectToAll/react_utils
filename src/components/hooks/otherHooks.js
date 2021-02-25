// import React, { useMemo, useCallback, useRef } from 'react';
// // //1. useMemo 和 useCallback的区别是，前面返回的是一个对象，后者返回的是一个函数
// // //2.useRef 绑定到input上面，可以直接获取到input的所有属性和方法值等等

// export default function OtherHooks(){//将参数结构出来，当作行参,子组建直接获取
//     const obj1 = {hights:"180",age:"17",name:"tim"}
//     const obj2 = {hights:"170",age:"18",name:"names",sex:"女"}

//     const memoValue = useMemo(()=>Object.assign(obj1,obj2),[obj1,obj2])
//     const memoCallback = useCallback(()=>Object.assign(obj1,obj2),[obj1,obj2])

//     return (
//         <div>
//             姓名：{memoValue.name}
//             姓名：{memoCallback().name}

//             <UseRefCom></UseRefCom>
//         </div>
//     )
// }


// const UseRefCom = ()=>{
//     const inputVal = useRef();//直接定义的时候获取这个useRef (hooks钩子)
//     const getVal=()=>{
//         onmouseleave.log(inputVal)
//     }
//     return (
//         <div>
//             <input value={inputVal} />
//             <button onClick={getVal}>点击</button>
//         </div>
//     )
// }