// 对store进行模块化
const defaultState = {
    name:"Jack",
    age:18,
    list:[],
}
export default (state = defaultStatus,action)=>{//action是个对象，需要有type属性

    if(action.type == 'change_name'){
        let tempState = state;
        tempState.name = action.name;
        return tempState;
    }
    if(action.type == 'init_list'){
        let tempState = state;
        tempState.list = action.list;
        return tempState;
    }
    return state;
    
}