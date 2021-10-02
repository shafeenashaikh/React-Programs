import React, { Component } from 'react';

class Hover extends Component {

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
    render() {
        const {count} = this.state
        return (
            <div>
                <h2 onMouseOver={this.incrementCount}>Hovered {count} Counter</h2>
            </div>
        );
    }
}

export default Hover;