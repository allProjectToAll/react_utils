import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import store from './components/redux/store'
import {Provider} from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {FirstReducer} from './components/redux/store2'


//1. redux写法
// let  render=()=>{
//   ReactDOM.render(<App />,
//     document.getElementById('root')
//   );

// }
// store.subscribe(render)
// render()

//2. react-redux写法
// ReactDOM.render(
//       <Provider store={store}>
//           <App />
//       </Provider>
//   ,
//   document.getElementById('root')
// );


// 3.redux的总结写法
const store = createStore(FirstReducer,applyMiddleware(thunk,logger));//FirstReducer是store里面的方法，用applyMiddleware中间键会异步加载，传入logger参数时组件操作会自动打印日志,参数thunk表示异步加载
ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>
,
document.getElementById('root')
);


