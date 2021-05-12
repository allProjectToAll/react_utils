// class组件接收
import React, { Component } from "react"
import MyContext from './context'

export default class Child2 extends Component {
    static contextType = MyContext
    render() {
        console.log(this.context,7778888)
        const {username,age} = this.context
        return (
            <div>
                我是子C组件
                名称{username},年龄：{age}
            </div>
        )
    }
}

// 函数组件接收
// import React from "react"
// import MyContext from './context'
// const {Consumer} = MyContext
// function Child2(){
// 	return (
// 		<div>
// 			<h3>我是C组件</h3>
// 			<h4>我从A组件接收到的用户名:
// 			<Consumer>
// 				{value => `${value.username},年龄是${value.age}`}
// 			</Consumer>
// 			</h4>
// 		</div>
// 	)
// }
// export default Child2
