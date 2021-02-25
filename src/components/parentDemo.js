import '../App.css';
import React,{Fragment} from 'react';
// import ReactDOM from 'react-dom';
import ChildDemo from './childDemo'
// import axios from 'axios'


class ParentDemo extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      inputVal:"",
      list:[],

      refVal:"",
    }
  }

  componentDidMount(){//这个函数只在dom加载完成之后一次，不会因为属性变化去多次执行
    // axios.post('xxxxxx').then((res)=>{
    // }).catch((err)=>{})
  }

  


  render(){
    return <Fragment>
      <div>
      <p className="title">1.点击事件，双向绑定，父组建传值给子组建，子组建调用父组建方法，子组建验证(PropTypes/defaultProps)父组建传过来的属性参数</p>
      <input value={this.state.inputVal} onChange={this.changeInputVal.bind(this)} />
      {/* 点击事件的三种方法 */}
      {/* <button onClick={this.noThisto}>点击添加1</button> */}
      {/* <button onClick={this.addList.bind(this)}>点击添加2</button> */}
      <button onClick={()=>this.addList()}>点击添加3</button>
      <br/><br/>
      下面是下拉框 {/**{这里的this.selectVal表示ref，获取值用this.selectVal.value}*/}
      <select ref = {(input)=> this.selectVal = input}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <button onClick={this.getSelectVal}>获取下拉框的值</button>
      

      <div>
        <ul>
          {
            this.state.list.map((item,index)=>(
              
              // <ChildDemo content={item} key={index} index={index} deletItem={()=>this.deletList(index)}></ChildDemo>
              <ChildDemo avname="波多野结衣" content={item} key={index} index={index} deletItem={this.deletList.bind(this)}></ChildDemo>
            ))
          }
        </ul>
      </div>


      <br/>
      <p className="title">
        2.用ref来双向绑定input的value值
      </p>
      1)在其他地方或者当前函数就能获取到this.input
      <input value={this.state.refVal} onChange={this.changeRefVal.bind(this)} ref={(input)=>{this.input=input}}  /><br/>
      2).在其他地方或者函数内能获取到 this.div
      <div ref={(div)=>{this.div=div}}>
        <p>111111</p>
        <p>22222</p>
      </div>
    </div>
    </Fragment>

  }

  getSelectVal = ()=>{
    console.log(this.selectVal.value)
  }

  

  changeRefVal(){
    this.setState({
      refVal:this.input.value
    })
    console.log(this.div)
  }

  changeInputVal(e){
    // console.log(this);
    this.setState({
      inputVal:e.target.value
    })
  }
  noThisto(){
    console.log("addList1addList1")
  }

  addList(){
    this.setState({
      list:[...this.state.list,this.state.inputVal],
      inputVal:"",
    })
    console.log(this.state.list)
  }
  deletList(index){
    let list = this.state.list;
    list.splice(index,1);
    this.setState({
      list:list
    })
  }



}

export default ParentDemo;
