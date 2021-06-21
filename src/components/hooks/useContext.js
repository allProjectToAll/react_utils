import React, { useContext } from "react";
const TestContext= React.createContext({});//创建一个createContext，里面是初始化的值

const Navbar = () => {
  const { username } = useContext(TestContext);//子组件内用useContext获取 父组件传的值

  return (
    <div className="navbar">
      <p>{username}</p>
    </div>
  )
}

function App() {
    let state = {
        username: 'superawesome',
    }
  return (
    //父组件用标签Provider包裹起来往下传值
	<TestContext.Provider  value={state}>
		<div className="test">
			<Navbar />
		</div>
	</TestContext.Provider>
  );
}
