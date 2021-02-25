import React, { Component } from 'react';

import store from './store'

class FirstRedux extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                {/* //通过store里面的getState方法获取状态数据 */}
                { store.getState().count }
                <button onClick={()=>{store.dispatch({type:'add'})}}>加一</button>
                <button onClick={()=>{store.dispatch({type:'reduce'})}}>减一</button>

            </div>
         );
    }
}

 
export default FirstRedux;