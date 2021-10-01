import React, { Component } from "react";
class PureComp extends Component{
    render(){
        console.log("Pure components")
        return(
            <div>
                <h2>Pure Components {this.props.name}</h2>
            </div>
        )
    }
}
export default PureComp