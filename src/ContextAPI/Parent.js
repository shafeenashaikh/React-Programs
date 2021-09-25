import React,{createContext, useState} from "react";
import Child from "./Child";

export const GlobalInfo = createContext();

function Parent(){
    const [color,setColor] = useState('green')
    return(
        <GlobalInfo.Provider value={{appColor:color}}>
        <div>
            <h1>Parent Component</h1>
            <Child/>
        </div>
        </GlobalInfo.Provider>
    )
}
export default Parent