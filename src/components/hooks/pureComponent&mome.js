//用PureComponent代替shouldComponentUpdate生命周期，是用在class组建中
//只有当state里面的值变化了才会执行render函数（componentWillUpdate/componentDidUpdate）


// mome是和PureComponent一样的功能，只能mome用在函数组件中（只有当state里面的值变化了才会执行render函数）


import React, { PureComponent } from 'react';
class TestC extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { 
            count: 0
        }
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate')
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate')
    }
    render() {
        return ( 
            <div> 
            { this.state.count } 
            <Child1 count={this.state.count}></Child1>
            <Child2></Child2>
            <button onClick = {
                () => this.setState({ count: 1 })
            }> Click Me </button> 
            </div >
        );
    }
}

class Child1 extends PureComponent {
    render(){
        console.log('child1组件');
        return (
            <div>
                child1组件
                {this.props.count}
            </div>
        )
    }
}
class Child2 extends PureComponent {//这个组件没有变化，不执行render函数
    render(){
        console.log('child2组件');
        return (
            <div>
                child2组件
            </div>
        )
    }
}

export default TestC;


// mome函数组件
// const Funcomponent = React.memo（()=> {
//     return (
//         <div>
//             Hiya!! I am a Funtional component
//         </div>
//     )
// })