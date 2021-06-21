import React, { Component } from 'react';
// 高阶组件 - 链式调用-装饰器写法

const withLearnReact = (Comp) => {
    const newComponent = (props) => {
        return <Comp {...props} name="这是高阶组件内部一个新的属性"></Comp>
    }
    return newComponent
}

const withLifeCycle = Comp => {
    class NewComponent extends Component{
        componentDidMount(){
            console.log("重写生命周期")
        }
        render (){
            return <Comp {...this.props} ></Comp>
        }
    }
    return NewComponent;
}

// 用@组件来解决链式调用
@withLearnReact
@withLifeCycle
class Hoc3 extends Component {
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

export default Hoc3;