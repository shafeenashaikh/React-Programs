import React, { Component } from "react";

class StudentClass extends Component{
    render(){
        return(
            <div>
                <h2>Student Name: {this.props.name}</h2>
            </div>
        )
    }
}
export default StudentClass