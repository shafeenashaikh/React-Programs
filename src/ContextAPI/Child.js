import React,{useContext} from "react";
import { GlobalInfo } from "./Parent";
import SuperChild from "./SuperChild";

function Child(){

    const {appColor} = useContext(GlobalInfo);
    return(
        <div>
            <h1 style={{color:appColor}}>Child Component</h1>
            <SuperChild/>
        </div>
    )
}
export default Child