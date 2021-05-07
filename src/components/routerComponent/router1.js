import React,{Component} from 'react';
import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom'
// import { Components } from 'antd/lib/date-picker/generatePicker';

function App(){
    return (
        <div>
            {/* //编写路由导航 */}
            <h3>一级菜单</h3>
            <ul>
                <li>
                    <Link to="/">首页</Link>
                </li>
                <li>
                    <Link to="/classes">课程</Link>
                </li>
                <li>
                    <Link to="/mine">我的</Link>
                </li>
                <li>
                    <Link to="/noRoute">没有的组件</Link>
                </li>
            </ul>
            {/* 路由配置 */}
            <Switch>{/**Switch表示只匹配一个页面，找到之后就不再匹配。否则所有的路由都会匹配到最后一个 */}
                <Route exact path="/" component={Home} ></Route>
                <Route path="/classes" component={Classes} ></Route>
                <RouteGuard path="/mine" component={Mine} ></RouteGuard>{/**这个用了路由守卫，判断有没有登陆 */}
                {/* <Route path="/mine" component={Mine} ></Route> */}    {/**没有用路由守卫 */}
                <Route path="/login" component={Login} ></Route>
                {/* 演示传参取参 */}
                <Route path="/detail/:course" component={Detail} ></Route>
                {/* 404一定要放在最下面，上面的所有的都没有匹配到的时候，才会匹配下面的 */}
                <Route component={NoRoute} ></Route>
                


            </Switch>
        </div>
        
    )
}


function Home({location}){
    console.log(location,888);
    return (
        <div>
            首页<br/>
            （验证从详情页返回回来的参数是：{(location.state&&location.state.foo)?location.state.foo:'还不是返回回来的'}）
        </div>
    )
}
function Classes(){
    return (
        <div>
            <ul>
                <li>
                    <Link to="/detail/:react">react课程</Link>
                </li>
                <li>
                    <Link to="/detail/:vue">vue课程</Link>
                </li>
            </ul>
        </div>
    )
}
//路由嵌套，二级路由
function Mine(){
    return (
        <div>
            <h3>二级菜单</h3>
            <ul>
                <li>
                    <Link to="/mine/userInfo">个人中心</Link>
                </li>
                <li>
                    <Link to="/mine/order">客户订单</Link>
                </li>
            </ul>
            <Switch>
                <Route path="/mine/userInfo" component={()=>(<div>个人信息</div>)} ></Route>
                <Route path="/mine/order" component={()=>(<div>客户订单</div>)} ></Route>
                {/* 路由重定向 初始化展开的路由 */}
                <Redirect to="/mine/userInfo"></Redirect>

            </Switch>
        </div>
    )
}
function NoRoute(){
    return (
        <div>
            404页面
        </div>
    )
}
function Detail({match,location,history}){
    return (
        <div>
            我是详情页{match.params.course}
            <button onClick={()=>{history.push({pathname:'/',state:{foo:"bar"}})}}>返回首页</button>
        </div>
    )
}


// 路由守卫
class RouteGuard extends Component{
    state = {
        isLogin:false,
    }
    render(){
        //解构传进来的参数
        const {component:Component,...otherProps} = this.props;
        return (
            <Route {...otherProps} render={(props)=>(
                this.state.isLogin ?
                <Component {...props}></Component>
                :
                <Redirect to={ {pathname:'/login',state:{from:props.location.pathname}} }></Redirect>
            )}></Route>

        )
    }
}

function Login(){
    return (
        <div>登录</div>
    )
}


export default function RouterSimple(){
    return(
        <div>
            <BrowserRouter>
                <App></App>
            </BrowserRouter>
        </div>
    )
}