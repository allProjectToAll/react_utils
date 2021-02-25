import React, { Component } from 'react';
// import React, { Component,PureComponent } from 'react';
import PropTypes from 'prop-types' //校验父组建传过来的值

// 用PureComponent(需要引入)代替 React.Component/Component ，可以不用写shouldComponentUpdate去判断，也就是只有当前组建的属性变化的时候，才会执行该组建内的方法
// class ChildDemo extends PureComponent{
// }


class ChildDemo extends Component {
    constructor(props){
        super(props)
        this.state={}
    }

    shouldComponentUpdate(nextProps,nextState){//判断props内的某些属性变化才会继续执行，其他属性变化是不执行的
        // if(nextProps.content !== nextState.content){//要用双等于号
        //     return true;
        // }else{
        //     return false;
        // }

        return false
        
    }

    render() { 
        console.log("renderChild")
        return ( 
            // 子组建调用父组建的方法
            <li onClick={()=>this.deletItem()}>
               {this.props.avname}为您做- {this.props.content}
            </li>
         );
    }
    deletItem(){
        this.props.deletItem(this.props.index)
    }
}

// 校验属性类型,key都是父组建传过来的属性值
ChildDemo.propTypes={
    avname:PropTypes.string.isRequired,//表示这个类型必须要传，必须校验
    content:PropTypes.string,
    index:PropTypes.number,
    deletItem:PropTypes.func,
}
ChildDemo.defaultProps={
    avname:'松岛枫',//表示默认有个值，可以不用父组建传过来
}
 
export default ChildDemo;