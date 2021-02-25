import React, { Component } from 'react';

// 高阶组件第二种：重写生命周期，（重新生命周期需要class组建）
// 解释：就是重写一个函数组建，在组件内部定义一个新的class组建，然后传入所有的属性，然后可以写生命周期，然后返回这个class组建



//高阶组件：
const withLearnReact = (Comp) => {//Comp是传入的组建
    const newComponent = (props) => {
        return <Comp {...props} name="这是高阶组件内部一个新的属性"></Comp>
    }
    return newComponent
}

//高阶组件：重写生命周期
const withLifeCycle = Comp => {
    //定义一个新的class组件
    class NewComponent extends Component{
        //重写组件生命周期
        componentDidMount(){
            console.log("重写生命周期")
        }
        render (){
            return <Comp {...this.props} ></Comp>
        }
    }
    return NewComponent;
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

//在这导出，用高阶组件套入原有的组件，这样就能获取到高阶组件内部新的属性 (多个高阶组件用多层嵌套)
export default withLifeCycle(withLearnReact(Hoc1));