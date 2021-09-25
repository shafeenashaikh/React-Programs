import React,{useContext} from "react";
import { GlobalInfo } from "./Parent";

function Child(){

    const {appColor} = useContext(GlobalInfo);
    console.log("appcolor",appColor)
    return(
        <div>
            <h1 style={{color:appColor}}>Child Component</h1>
        </div>
    )
}
export default Child