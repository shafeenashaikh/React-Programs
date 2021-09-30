import React, { Component } from "react";

class ErrorBoundries extends Component{

constructor(props){
    super(props);
    this.state ={
        hasError: false,
    }
}

static getDerivedStateFromError(error){
    console.log(error)
    return {hasError: true};
}

    render(){
          if(this.state.hasError){
              return(
                  <div>
                      Display Error
                  </div>
              )
          }else{
              return this.props.children;
          }
    }
}

export default ErrorBoundries