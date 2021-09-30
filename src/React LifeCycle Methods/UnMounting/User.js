import React, { Component } from "react";

class User extends Component{

    componentWillUnmount(){
        alert("user has been Deleted")
    }

    render(){
        return(
            <div>
                <ul>
                    <li>Name:Diana</li>
                    <li>Email:Diana@gmail.com</li>
                    <li>Contact:145236987</li>
                </ul>
            </div>
        )
    }
}
export default User;