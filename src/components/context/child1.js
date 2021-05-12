import React, { Component } from "react"
import Child2 from './child2'

export default class Child1 extends Component {
    render() {
        return (
            <div>
                我是中间B组件
                <Child2/>
            </div>
        )
    }
}
