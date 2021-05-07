import {createStore,applyMiddleware} from 'redux'
import Reducer from './reducer'
import thunk from 'redux-thunk'


// const store = createStore(Reducer);//没有异步方法的时候， Reducer是将store提出去模块化写
const store = createStore(Reducer,applyMiddleware(thunk));//Reducer是将store提出去模块化写 ,applyMiddleware是中间件，处理异步方法的，传入的thunk是个插件
export default store;