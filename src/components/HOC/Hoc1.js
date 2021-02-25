import React, { Component } from 'react';
// 高阶组件第一种：传入一个组件，返回一个新的组件
// 解释：传入一个组件，返回一个新的组件(就是重新写一个函数组建，把原有的class组件当作参数传进去当作一个dom，然后再在该dom中传入新的属性)

//高阶组件：
const withLearnReact = (Comp) => {//Comp是传入的组建
    const newComponent = (props) => {
        return <Comp {...props} name="这是高阶组件内部一个新的属性"></Comp>
    }
    return newComponent
}


//原本的class组件
class Hoc1 extends Component {
    state = {}
    render() {
        return (
            <div>
                <p>{this.props.title}</p>
                <p>{this.props.name}</p>
            </div>
        );
    }
}
//在这导出，用高阶组件套入原有的组件，这样就能获取到高阶组件内部新的属性 
export default withLearnReact(Hoc1);