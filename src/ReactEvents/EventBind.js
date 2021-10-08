import React, { Component } from 'react';

class EventBind extends Component {
    constructor(){
        super();
        this.state = {
            message: "Hello"
        }
    }

    clickHandler(){
        this.setState({
            message: "GoodBye!"
        })
    }

    render() {
        return (
            <div>
                <h2> {this.state.message}</h2>
                <button onClick={this.clickHandler.bind(this)}>Clcik</button>
            </div>
        );
    }
}

export default EventBind;