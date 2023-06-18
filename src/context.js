import { createContext, useReducer } from "react";

export const themeContext = createContext();

const inisilizeState = {darkMode : false};

const themeReducer = (state, action)=>{
    switch(action.type){
        case 'toggles':
            return {darkMode : !state.darkMode}
            default: 
            return state;
    }
};

export const ThemeProvider = (props) =>{
    const [state, dispatch] = useReducer(themeReducer, inisilizeState);
    return(
        <themeContext.Provider value={{state , dispatch}}>
            {props.children}
        </themeContext.Provider>
    );
}