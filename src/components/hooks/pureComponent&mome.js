//用PureComponent代替shouldComponentUpdate生命周期，是用在class组建中
//只有当state里面的值变化了才会执行render函数（componentWillUpdate/componentDidUpdate）


// mome是和PureComponent一样的功能，只能mome用在函数组件中（只有当state里面的值变化了才会执行render函数）


import React from 'react';
class TestC extends React.PureComponent {
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
    /*shouldComponentUpdate(nextProps, nextState) {
        if (this.state.count === nextState.count) {
            return false
        }
        return true
    }*/
    render() {
        return ( 
            <div> 
            { this.state.count } 
            <button onClick = {
                () => this.setState({ count: 1 })
            }> Click Me </button> 
            </div >
        );
    }
}

export default TestC;


// mome函数组件
// const Funcomponent = ()=> {
//     return (
//         <div>
//             Hiya!! I am a Funtional component
//         </div>
//     )
// }
// const MemodFuncComponent = React.memo(FunComponent)