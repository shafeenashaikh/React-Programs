import React, { Component } from "react";

class CounterDemo extends Component{

constructor(){
    super();
    this.state = {
        count: 0
    }
}

    render(){
        if(this.state.count == 5){
            throw new Error("Error Ocurred!")
        }
        else{
            return(
                <div>
                    <h2>{this.state.count}</h2>
                    <button onClick={()=>this.setState({count: this.state.count+1})}>increment</button>
                </div>
            )
        }
        
    }
}
export default CounterDemo