import React,{useContext} from "react";
import { GlobalInfo } from "./Parent";


function SuperChild(){

    const {appColor} = useContext(GlobalInfo);
    return(
        <div>
            <h1 style={{color:appColor}}>SuperChild Component</h1>
           
        </div>
    )
}
export default SuperChild