import React, { Component } from 'react';

class demo extends Component {
    // 1.dom挂载的时候执行函数
    //1).componentWillMount  //组建将要挂载  可以调用api，但是不能dom操作
    //2).componentDidMount   //组建已经挂载   可以进行dom操作，对状态操作

    // 2.下面是state/props发生变化的时候执行的生命周期函数
    //1).shouldComponentUpdate   //组建是否需要更新，返回布尔值
    //2).componentWillUpdate     //组建将要更新
    //3).render
    //4).componentDidUpdate      //组建已经更新

    // 3.子组建独有的周期函数，子组建的props变化才会执行
    // 1).componentWillReceiveProps:用法：1.放在子组建中，2.组建第一次存在于dom中，函数是不会被执行的，3.已经存在于dom中，函数才会执行

    //4.组建将要被删除之前执行
    //1).componentWillUnmount   //组建将要销毁




    componentWillMount(){
        console.log('componentWillMount----组建将要挂载在页面的时刻')
    }

    componentDidMount(){
        console.log('componentDidMount----组建挂载完成的时刻')
    }


    


    shouldComponentUpdate(nextProps,nextStates){//这个生命周期需要返回一个布尔值，true：继续往下执行，false：不往下执行
        console.log('1-shouldComponentUpdate');
        // if(nextProps.content !== nextState.content){//要用双等于号
        //     return true;
        // }else{
        //     return false;
        // }
        return true;
    }

    componentWillUpdate(){
        console.log('2-componentWillUpdate')
    }

    componentDidUpdate(){
        console.log("4-组建更新完成之后执行")
    }

    //1.放在子组建中，2.组建第一次存在于dom中，函数是不会被执行的，3.已经存在于dom中，函数才会执行
    componentWillReceiveProps(){
        console.log("child-componentWillReceiveProps-")
    }

    componentWillUnmount(){
        console.log("组建将要被删除之前执行")
    }




    render() { 
        console.log('3-render---组建挂载中')
        return ( 
            <div></div>
         );
    }
}
 
export default demo;

