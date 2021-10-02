import React, { Component } from "react";

class CounterClick extends Component{

    constructor(props){
        super();
        this.state ={
            count: 0
        }

    }

    incrementCount = () => {
        this.setState(prevState => {
            return {count: prevState.count + 1}
        })
    }
    render(){
        const {count} = this.state
        return(
            <div>
                <button onClick={this.incrementCount}>Click {count} times</button>
            </div>
        )
    }
}
export default CounterClick