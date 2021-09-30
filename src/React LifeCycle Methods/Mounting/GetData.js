import React, { Component } from 'react'

class GetData extends Component{

    constructor(props){
        super(props);
        this.state = {
            name: 'Bruce'
        }
    }

    static getDerivedStateFromProps(props,state){
        return {name: props.name}
    }
    render(){
        return(
            <div>
                <h2> My name is {this.state.name}</h2>
            </div>
        )
    }
}
export default GetData