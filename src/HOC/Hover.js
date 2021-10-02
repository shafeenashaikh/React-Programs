import React, { Component } from 'react';
import HOCcounter from "./HOCcounter";
class Hover extends Component {

    render() {
        const {count, incrementCount} = this.props
        return (
            <div>
                <h2 onMouseOver={incrementCount}>  Hovered {count} Counter</h2>
            </div>
        );
    }
}

export default HOCcounter(Hover);