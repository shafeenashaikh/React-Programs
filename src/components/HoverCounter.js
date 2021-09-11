import React, {Component } from 'react';
import UpdatedComponent from './withCounter'

class HoverCounter extends Component{



    render(){
        const {count, incrementcount} = this.props
        return(
            <h2 onMouseOver={incrementcount}>{this.props.name} Hovered {count} times</h2>
        )
    }
}
export default UpdatedComponent(HoverCounter)
