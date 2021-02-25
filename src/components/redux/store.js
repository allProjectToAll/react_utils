import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk'

//第一个reducer
const FirstReducer = (state={count:1},action)=>{
    switch(action.type){
        case 'add':
            return {count:state.count+1};
        case 'reduce':
            return {count:state.count-1};
        default:
            return state;
    }
}




//创建数据仓库，把编写好的reducer传给createStore
const store = createStore(FirstReducer,applyMiddleware(thunk,logger));//用applyMiddleware中间键会异步加载，传入logger参数时组件操作会自动打印日志,参数thunk表示异步加载




export default store;