import React, {Component} from 'react';

class Count extends Component{

    constructor(){
        super()
        this.state = {
            count: 0
        }
    }

    increment() {
        this.setState({
            count: this.state.count + 1

        }, () => {
            console.log( 'call back value', this.state.count)
        })
       
    }

    incrementFive(){
     this.increment()
     this.increment()
     this.increment()
     this.increment()
    }

    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={() => this.incrementFive()}>Increament</button>
            </div>
        )
    }
}
export default Count;