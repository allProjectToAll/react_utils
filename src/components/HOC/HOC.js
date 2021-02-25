import React, { Component } from 'react';
import Hoc1 from './Hoc1'
import Hoc2 from './Hoc2'
import Hoc3 from './Hoc3'

class HOC extends Component {
    state = {}
    render() {
        return (
            <div>
                1.高阶组件：传入一个组件，返回一个新的组件
                <Hoc1 title="我是父级组件属性"></Hoc1>

                2.高阶组件：重新生命周期，（重新生命周期需要class组建）
                <Hoc2 title="我是父级组件属性"></Hoc2>
                
                3.装饰器语法：用@高阶组件名称使用，高阶组件定义必须写在@该组件的上面。
                <Hoc3 title="我是父级组件属性"></Hoc3>


            </div>
        );
    }
}

export default HOC;