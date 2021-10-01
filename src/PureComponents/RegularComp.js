import React, { Component } from "react";
class RegularComp extends Component{
    render(){
        return(
            <div>
                <h2>Regular Components {this.props.name}</h2>
            </div>
        )
    }
}
export default RegularComp