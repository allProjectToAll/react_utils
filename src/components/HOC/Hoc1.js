import React, { Component } from 'react';

// 高阶组件第一种：传入一个组件，返回一个新的组件
// 解释：传入一个组件，返回一个新的组件,原本调用的属性可以获取到，高阶组件内部独有的属性也可以获取到

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
                <p>{this.props.name}</p>{/***这个name是高阶组件独有的属性 */}
            </div>
        );
    }
}
//
export default withLearnReact(Hoc1);