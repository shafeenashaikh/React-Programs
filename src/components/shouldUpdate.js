import React, { Component } from 'react';

class ShouldUpdate extends Component{

    constructor(){
        super()
        this.state = {
            count: 0
        }
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate", this.state.count);
        return true
    }


    render(){
        return(
            <div>
                <h1>Should update {this.state.count}</h1>
                <button onClick={() => {this.setState({count:this.state.count+1})}}>Update counter</button>
                
            </div>
        )
    }
}
export default ShouldUpdate;