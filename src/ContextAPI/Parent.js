import React,{createContext, useState} from "react";
import Child from "./Child";
import OtherChild from "./OtherChild";

export const GlobalInfo = createContext();

function Parent(){
    const [color,setColor] = useState('green')
    const [day,setDay]=useState("Monday")
    const getDay=(item)=>{
        console.log(item)
        setDay(item)
    }
    return(
        <GlobalInfo.Provider value={{appColor:color, getDay:getDay}}>
        <div>
            <h1>Parent Component {day}</h1>
            <Child/>
            <OtherChild/>
        </div>
        </GlobalInfo.Provider>
    )
}
export default Parent