import React, { Component } from "react";
import componentE from "./ComponentE";

class componentC extends Component{
    render(){
        return(
         <div>
             <componentE/>
             <h2>Hello</h2>
         </div>
        )
    }
}
export default componentC;