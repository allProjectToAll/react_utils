import React,{Fragment} from "*****"
import ReactDOM from "***"

//0.Fragment相当于vue的 template 标签，包裹最外层没有div层
//1.props:数据是外界传的，不可修改
//2.state：组建私有的，可读可修改
//3.样式属性： <Movie style={{color:'red',fontSize:'12px'}}></Movie>  //用双打括号，且值 用单引号
//4.点击事件
// 5.设置setState,并在setState的第二个函数内获取对应的修改的值
// 6.双向绑定，，1）.input框内加readonly只读不允许修改就不存在双向绑定，2）.提供onChange方法修改促使双向绑定
// 7.使用ref


let user = {
    name:"name111",
    age:12,
    gender:"男"
}

class Movie extends React.components{
    constructor(props){
        super(props)
        // 私有数据
        this.state = {//相当于 vue中的  data(){return {} }
            msg:"aaaaaaa"
        }
    }
    //相当于constructor的this.state
    // state = {
    //     msg:"aaaaaa"
    // }

    //必须要有render和return
    render(){
        // this.props.name = '11111' //这是错误的，props里面的值是不能修改的
        this.state.msg = "这是可以修改的";//这state是可以修改的

        return  <Fragment>
            <div>
                {/**这里的this表示组建的实例对象  */}
                这是子组建 {this.props.name}--{this.props.age}

                {/* 获取state值 */}
                {this.state.msg}

                <button onClick={this.clickFn}></button>
                {/* 传递参数用剪头函数 */}
                <button onClick={(item)=>this.clickFn(item)}></button>
                {/* 上面的相当于 */}
                <button onClick={ ()=>{ this.clickFn(item) }  }></button>

                {/* 双向绑定 */}
                {/**如果方法内没有用到this，直接调用方法，this.textChange,后面没有小括号 */}
                <input type="text" value={this.state.msg} onChange={this.textChange} ref="txt" />
                {/**如果方法内有用到this，调用方法用bind传this ， this.textChange.bind(this)   */}
                <input type="text" value={this.state.msg} onChange={this.textChange.bind(this)} ref="txt" />
                {/**如果方法内有用到this，用剪头函数，调用函数后面要加小括号，()=>this.textChange() */}
                <input type="text" value={this.state.msg} onChange={()=>this.textChange()} ref="txt" />

                {/* 如何使用ref */}
                <input type="text" value={this.state.msg} onChange={()=>this.refChange()} ref={(input)=>{this.input=input}} />
                <div ref={(div)=>{this.div=div}}></div>


            </div>
        </Fragment>
    }

    textChange(){
        //获取文本框内容的方法有两种
        // 1.
        let val = e.target.value;
        //2.
        let val2 = this.refs.txt.value

        this.setState({
            msg:val // val2
        })

    }

    refChange(){
        this.setState({
            msg:this.input.value
        })
    }

    clickFn(){
        console.log("点击事件");

        this.setState({//属于异步方法
            msg:"123123"
        },()=>{//等异步调用完成之后，在内部函数里面拿到该有的值
            console.log(this.state.msg);
        })

    }
}


ReactDOM.render(<div>
    {/* <Movie name={user.name} age={user.age}></Movie> */}
    <Movie {...user}  style={{color:'red',fontSize:'12px'}}></Movie>
</div>,document.getElementById("app"))