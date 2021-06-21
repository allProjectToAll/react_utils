import React, { createContext , useReducer} from 'react';
export const UPDATE_COLOR = "UPDATE_COLOR"
export const ColorContext = createContext({});


const reducer = (state,action)=>{
    switch(action.type){
        case UPDATE_COLOR:
            return action.color;
        default:
            return state
    }
}


export const Color = (props)=>{

    const [color,dispatch] = useReducer(reducer,'blue'); //这里是useReducer的方法

    return (
        <ColorContext.Provider value={{color,dispatch}}>   {/*这里是useContext的方法*/}
            {props.children}
        </ColorContext.Provider>
    )
}