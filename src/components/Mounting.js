import React, {Component} from 'react';

class Mounting extends Component{

    constructor(){
        super();
        this.state = {
            username: 'Diana'
        }
        console.log("constructor")
    }

    static getDerivedStateFromProps(props, state){
        console.log("getDerivedStateFromProps")
        return null
    }

    componentDidMount(){
        console.log("componentDidMount")
    }

    render(){
        console.log("render")
        return(
            <div>
                <h2>Mounting</h2>
            </div>
        )
    }
}
export default Mounting;