// 大部分见 ==》(03组建---属性 / parentDemo.js)

//0.Fragment相当于vue的 template 标签，包裹最外层没有div层
//1.props:数据是外界传的，不可修改
//2.state：组建私有的，可读可修改
//3.样式属性： <Movie style={{color:'red',fontSize:'12px'}}></Movie>  //用双打括号，且值 用单引号
//4.点击事件。见==》(03组建---属性）
// 5.设置setState,并在setState的第二个函数内获取对应的修改的值。见==》(03组建---属性）
// 6.双向绑定，，1）.input框内加readonly只读不允许修改就不存在双向绑定，2）.提供onChange方法修改促使双向绑定。  见==》(03组建---属性 / parentDemo.js)
// 7.使用ref ==>(03组建---属性 / parentDemo.js)
// 8.PropTypes/defaultProps：子组建验证父组建传过来的属性参数的类型 ==>(childDemo.js)
//9.子组建调用父组建的方法==在案列中有体现：parentDemo.js(父组建)=>childDemo.js(子组建)
//10.使用 PureComponent 代替生命周期 shouldComponentUpdate(这个生命周期需要返回一个布尔值，true：继续往下执行，false：不往下执行)，在childDemo.js里面展示
//11.用 React.memo高阶组件 代替class组件 ，见child2Demo.js

// 12.高阶组件 名称一般以with开头， 见components/HOC/  见=》（08高阶组件）

// 13.组建通信之上下文  =》09

// 14.hooks  =》10.

//15. 1）redux =>11.
    //2）react-redux 原生太复杂没有掩饰，掩饰了react-redux的装饰器写法。见react-redux.js