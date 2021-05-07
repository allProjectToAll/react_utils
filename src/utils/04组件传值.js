class ParentDemo extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        list:[],
      }
    }
    render(){
      return <Fragment>
          <ul>
            {
              this.state.list.map((item,index)=>(
               <ChildDemo avname="波多野结衣" content={item} key={index} index={index} deletItem={this.deletList.bind(this)}></ChildDemo>
              ))
            }
          </ul>
      </Fragment>
  
    }
    deletList(){//方法

    }
}
// class组件传值
class ChildDemo extends Component {
    constructor(props){
        super(props)
        this.state={}
        props.deletItem();//方法
    }
    render() { 
        return ( 
            // 子组建调用父组建的方法
            <li onClick={()=>this.deletItem()}>
               {this.props.avname}为您做- {this.props.content}
            </li>
         );
    }
    deletItem(){
        this.props.deletItem(this.props.index);//父组件的方法
    }
}

//函数组件传值
function CmtItem(props){
    return <div>
        <h1>评论人：{props.user}</h1>
        <p>评论内容：{props.content}</p>
    </div>
}