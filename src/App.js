import './App.css';
import React,{Fragment} from 'react';
import ParentDemo from './components/parentDemo'
import AntAsign from './components/antAsign'
import ReactMemo from './components/ReactMemo'
import HOC from './components/HOC/HOC'
import Hook from './components/hooks/index'
import Redux from './components/redux/index'
import Router from './components/routerComponent/index'
import Context from './components/context/parent'
// import Card from './components/card'


class App extends React.Component{

  render(){
    return <Fragment>
      <h2>1.demo组建</h2>
      <ParentDemo/>

      <h2>2.antd框架使用</h2>
      <AntAsign></AntAsign>

      <h2>3.React.memo高阶组件,插槽</h2>
      <ReactMemo>
        <div>这是父组建的插槽</div>
      </ReactMemo>


      <h2>4.高阶组件</h2>
      <HOC></HOC>

      <h2>5.Hooks</h2>
      <Hook></Hook>


      <br/><br/>
      <h2>6.Redux(安装 npm install redux --save)</h2>
      <Redux></Redux>

      <br/><br/>
      <h2>7.路由展示</h2>
      <Router></Router>

      <br/><br/>
      <h2>8.context展示</h2>
      <Context></Context>





      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

    </Fragment>

  }
}

export default App;
