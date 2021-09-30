import React, { Component } from "react";

class DidUpdate extends Component{

    constructor(){
        super();
        this.state = {
            name: 'Diana'
        }
    }

    componentDidUpdate(){
        console.log("DidUpdate")
    }

    render(){
        return(
            <div>
               <h2>Component DidUpdate</h2>
               <button onClick={() => this.setState({name: 'Bruce'})}>Update Name</button>
            </div>
        )
    }
}
export default DidUpdate