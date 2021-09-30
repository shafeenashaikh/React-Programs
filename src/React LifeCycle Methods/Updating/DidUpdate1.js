import React, { Component } from "react";

class DidUpdate1 extends Component{

    constructor(){
        super();
        this.state = {
            count: 0
        }
    }

    componentDidUpdate(preProps,preState,snapshot){
        console.log("DidUpdate",preState)
    }

    render(){
        return(
            <div>
               <h2>Component DidUpdate  {this.state.count}</h2>
               <button onClick={()=>this.setState({count: this.state.count+1})}>Update Name</button>
            </div>
        )
    }
}
export default DidUpdate1