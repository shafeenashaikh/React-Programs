import React, { Component } from "react";
import {UserConsumer} from './userContext'

class componentF extends Component{
    render(){
        return(
            <UserConsumer>
            {
                username => {
                    return <div> Hello</div>
                }
            }
        </UserConsumer>
        )
    }
}
export default componentF;