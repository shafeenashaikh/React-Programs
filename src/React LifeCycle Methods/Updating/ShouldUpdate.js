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
        if(this.state.count>5 && this.state.count<20)
        {
            
            return true
        }
    }

getSnapshotBeforeUpdate(preProps,preState){
    console.log('getSnapshotBeforeUpdate',preState);
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