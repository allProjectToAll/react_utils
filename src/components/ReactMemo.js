import React from 'react';
// class Child2Demo extends Component {
//     state = {  }
//     render() { 
//         return ( 

//          );
//     }
// }

// 用 React.memo 代替class组建定义
const Child2Demo = React.memo((props)=>{
    return(
        <div>
            我是React.memo高阶组建
            {props.children}
        </div>
    )
})
 
export default Child2Demo;