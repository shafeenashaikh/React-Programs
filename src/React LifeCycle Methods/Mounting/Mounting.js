import React, { Component } from 'react';

class MountingLifeCycle extends Component{

    constructor(props){
        super(props);
        this.state = {
            name: "Sam"
        }
        console.log("constructor")
    }

    static getDerivedStateFromProps(props,state){
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
                Mounting LifeCycle
            </div>
        )
    }
}
export default MountingLifeCycle