import React, { Component } from 'react';

class CountClass extends  Component{

    constructor(){
        super();
        this.state ={
            count: 0
        }
    }

    updateCount(){
        this.setState({count:this.state.count+1})
    }
    render(){
        return(
            <div>
                <h2>{this.state.count}</h2>
                <button onClick={()=>this.updateCount()}>Update Count</button>
            </div>
        )
    }
}
export default CountClass