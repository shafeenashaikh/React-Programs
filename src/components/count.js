import React, {Component} from 'react';
import UpdatedComponent from './withCounter'

class Counter extends Component{

  
    render(){
        const {count, incrementcount} = this.props
        return(
            <button onClick={incrementcount}> {this.props.name} clicked {count} times</button>
        )
    }
}
export default UpdatedComponent(Counter)