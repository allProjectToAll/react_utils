
import React, { Component } from 'react'
import MyContext from './context'
import Child1 from './child1'

//创建Context对象
// const MyContext = React.createContext()
const {Provider} = MyContext
export default class A extends Component {

	state = {username:'tom',age:18}

	render() {
		const {username,age} = this.state
		return (
			<div className="parent">
				<h3>我是A组件</h3>
				<h4>我的用户名是:{username}</h4>
				<Provider value={{username,age}}>
					<Child1/>
				</Provider>
			</div>
		)
	}
}