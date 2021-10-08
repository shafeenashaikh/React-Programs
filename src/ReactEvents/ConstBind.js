import React, { Component } from 'react';

class ConstBind extends Component {

    constructor(){
        super();
        this.state ={
            message:"Hello"
        }
    }

    clickHandler(){
        this.setState({
            message:"GoodBye!"
        })
        this.clickHandler = this.clickHandler.bind(this)
    }
    render() {
        return (
            <div>
                <h2> {this.state.message}</h2>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        );
    }
}

export default ConstBind;