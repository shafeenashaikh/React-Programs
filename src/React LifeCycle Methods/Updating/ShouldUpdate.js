import React, { Component } from "react";

class ComponentShouldUpdate extends Component{

    constructor(){
        super();
        this.state = {
            count: 0,
        }
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate",this.state.count);
        return true
    }

    render(){
        return(
            <div>
                <h2> Should Component dUpdate {this.state.count}</h2>
                <button onClick={()=>this.setState({count: this.state.count+1})}>Update Counter</button>
            </div>
        )
    }
}
export default ComponentShouldUpdate