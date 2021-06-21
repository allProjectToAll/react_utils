
//创建组件
class Login extends React.Component{
    //初始化状态
    state = {
        username:'', //用户名
        password:'' //密码
    }
    handleSubmit = (event)=>{
        event.preventDefault() //阻止表单提交
        const {username,password} = this.state
        alert(`你输入的用户名是：${username},你输入的密码是：${password}`)
    }
    // 封装获取表单的值
    saveFormData(dataType){
        return (event)=>{
            this.setState({[dataType]:event.target.value})
        }
    }


    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                用户名：<input onChange={this.saveFormData('username')} type="text" name="username"/>
                密码：<input onChange={this.saveFormData('password')} type="password" name="password"/>
                <button>登录</button>
            </form>
        )
    }
}