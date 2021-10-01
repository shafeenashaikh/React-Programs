import React, { Component } from "react";
import PureComp from "./PureComp";
import RegularComp from "./RegularComp";
class ParentComp extends Component{

constructor(props){
    super(props);
    this.state ={
        name: 'Diana'
    }
}

componentDidMount(){
    setInterval(() => {
        this.setState({
            name: 'Diana'
        })
    },2000)
}

    render(){
        return(
            <div>
                <h2>Parent Components </h2>
                <RegularComp name={this.state.name}/>
                <PureComp name={this.state.name}/>
            </div>
        )
    }
}
export default ParentComp