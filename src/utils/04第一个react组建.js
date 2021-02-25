import React from "*****"
import ReactDOM from "***"

// 无状态组建一函数组建
function CmtItem(props){
    return <div>
        <h1>评论人：{props.user}</h1>
        <p>评论内容：{props.content}</p>
    </div>
}

// 有状态组建---class组建
class CmtList extends React.components{
    constructor(){
        super()
        this.state = {
            commenList:[
                {id:"1",user:"张三",content:"评论内容111"},
                {id:"2",user:"张2",content:"评论内容222"},
                {id:"3",user:"张3",content:"评论内容333"},
                {id:"4",user:"张4",content:"评论内容444"},
            ]
        }
    }
    render(){
        return   <div>
            {
                this.state.commenList.map(item=><CmtItem {...item} key={item.id}></CmtItem>)
            }
        </div>
    }
}


ReactDOM.render(<div>
    <CmtList></CmtList>
</div>,document.getElementById("app"))