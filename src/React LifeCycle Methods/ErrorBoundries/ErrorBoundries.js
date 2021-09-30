import React, { Component } from "react";

class ErrorBoundries extends Component{

constructor(props){
    super(props);
    this.state ={
        hasError: false,
        error: "",
        errorInfo: "",
    }
}

static getDerivedStateFromError(error){
    // console.log(error)
    return {hasError: true};
}

componentDidCatch(error,errorInfo){
    console.log(error,errorInfo)

    this.setState({
        error,
        errorInfo,
    })
}

    render(){
          if(this.state.hasError){
              return(
                  <div>
                      <h5>Error:</h5>{this.state.error.toString()}<br/>
                      <h5>Error Info:</h5>{this.state.errorInfo.componentStack}
                  </div>
              )
          }else{
              return this.props.children;
          }
    }
}

export default ErrorBoundries