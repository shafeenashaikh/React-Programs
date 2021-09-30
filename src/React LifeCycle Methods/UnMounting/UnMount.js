import React, { Component } from "react";
import User from "./User";

class UnMount extends Component{

    constructor(){
        super();
        this.state = {
            toggle: true
        }
    }
    render(){
        return(
            <div>
               <h2> Component WillUnMount</h2>
               {
                   this.state.toggle?
                   <User/>:null
               }
               <button onClick={()=>{this.setState({toggle:!this.state.toggle})}}>Delete User</button>
            </div>
        )
    }
}
export default UnMount