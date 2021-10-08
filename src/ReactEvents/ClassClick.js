import React, { Component } from "react";

class ClassClick extends Component{

    handleClick(){
        console.log("Clicked the button")
    }
    render(){
        return(
            <div>
                <button onClick={this.handleClick}>Click Me</button>
            </div>
        )
    }
}
export default ClassClick