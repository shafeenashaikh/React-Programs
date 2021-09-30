import React, { Component } from "react";

class ErrorBoundries1 extends Component{

    constructor(){
        super();
        this.state = {
            hasError:false
        }
    }

    static getDerivedStateFromError(error){
        return {
            hasError: true
        }
    }

    componentDidCatch(error, info){
        console.log(error)
        console.log(info)
    }

    render(){
       if(this.state.hasError){
           return <h2>Somthing went  Wrong!</h2>
       }
       return this.props.children;
    }
}
export default ErrorBoundries1