import React, { Component } from "react";
class RegularComp extends Component{
    render(){
        console.log("Regular components")
        return(
            <div>
                <h2>Regular Components {this.props.name}</h2>
            </div>
        )
    }
}
export default RegularComp