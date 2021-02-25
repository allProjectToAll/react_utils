


// 1.安装：npm install react-router-dom --save 

const { Link } = require("react-router-dom")

// 2.路由传参：见router1.js
    // 1）.申明导航路由配置参数
        // 配置： <Route path="/detail/:course" component={Detail}></Route>
        // 传参：<Link to="/detail/react">react</Link>
    //2）.编程式结构：
        // history.push({pathname:"/",state:{foo:'bar'}})

// 3.路由嵌套和路由重定向
    // 二级路由和初始化路由指向

// 4.路由守卫