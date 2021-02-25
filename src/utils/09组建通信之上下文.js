import React from 'react';

// 1.定义变量
const MyContext = React.createContext()
const {Provider, Consumer} = MyContext


//2. 定义的父组件中,传入的属性需要时value,   ChildrenComponents是第一级子组建名称，store是定义的一个变量
<Provider>
    <ChildrenComponents value={this.state.store}></ChildrenComponents> 
</Provider>



//3. 使用 的子组件中
<Consumer>
    {
        store=>{
            return(
                <div>
                    {store.name}
                </div>
            )
        }
    }
</Consumer>