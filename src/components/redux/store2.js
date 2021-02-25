
// 总结redux，统一规划
// 1.把原来store.js里面的方法拿过来
// 2.把原来组件里面的装饰器里面的调用方法也拿过来
// 3.再分别导出去
// 4.在 组件redux-thunk2 里面引入{add,reduce,asyncAdd}，并使用
// 5.把store里面的引入全部放入根目录的index.js里面 
    // import { createStore, applyMiddleware } from 'redux';
    // import logger from 'redux-logger'
    // import thunk from 'redux-thunk'
// 6.把 const store = createStore(FirstReducer,applyMiddleware(thunk,logger)); 也移动到根目录的index.js里面，FirstReducer是store里面的方法，用applyMiddleware中间键会异步加载，传入logger参数时组件操作会自动打印日志,参数thunk表示异步加载


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

const add = ()=>({type:"add"});
const reduce = ()=>({type:"reduce"});
const asyncAdd = ()=>dispatch=>{
        setTimeout(()=>{
            dispatch({type:"add"})
        },2000)
    }


export {FirstReducer,add,reduce,asyncAdd}