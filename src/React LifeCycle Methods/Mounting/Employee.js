import React, { Component } from 'react'

class Employee extends Component{

    constructor(props){
        super(props);
        this.state = {
            name: 'Bruce'
        }
    }

    render(){
        return(
            <div>
                <h2> My name is {this.state.name}</h2>
            </div>
        )
    }
}
export default Employee;