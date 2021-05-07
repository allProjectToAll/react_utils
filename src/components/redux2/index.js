import React, { Component } from 'react';
import store from './store';
import axios from 'axios';

class Reduxx extends Component {
    constructor(){
        super()
        state = {
            name:store.getState().name,  //获取redux内state的内容
            age:store.getState.age,
            list:store.getState.list
        }

        store.subscribe(()=>{//监听store内数据的变化
            this.setState({
                name:store.getState().name,
                list:store.getState.list
            })
        })
    }
    componentDidMount(){
        store.dispatch(this.getList());//派发方法,因为派发只能是对象，所以用thunk插件来派发方法，然后在方法里面返回对象
    }
    //派发方法
    getList(){
        return (dispatch)=>{
            axios.get("https://").then((res)=>{
                let action = {
                    type:"init_list",
                    list:res.data.list
                }
                dispatch(action);//派发给reducer
            })
        }
    }
    
    render() {
        return (
            <div>
                <input value={this.state.name} onChange={this.change.bind(this)} />
                <button onClick="">点击切换store中的数据</button>
                
            </div>
        );
    }

    // 输入框改变的事件
    change(e){
        let inputValue = e.target.value;
        //进行派发，改变store中的数据
        let action = {
            type:"change_name",//每个派发里面必须要有type属性
            name: inputValue,//值给他
        }
        store.dispatch(action);//派发对象
    }
}

export default Reduxx;