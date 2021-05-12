import React from 'react'

function Demo(){

	const myRef = React.useRef();//获取输入框内的值


	//提示输入的回调
	function show(){
		alert(myRef.current.value)
	}

	return (
		<div>
			<input type="text" ref={myRef}/>
			<button onClick={show}>点我提示数据</button>
		</div>
	)
}

export default Demo
