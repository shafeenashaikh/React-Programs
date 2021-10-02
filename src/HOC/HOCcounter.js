import React, { Component } from 'react';

const HOCcounter = WrappeComponent => {
    class HOCcounter extends Component{

        constructor(props){
            super();
            this.state ={
                count: 0
            }
    
        }
    
        incrementCount = () => {
            this.setState(prevState => {
                return {count: prevState.count + 1}
            })
        }

        render(){
            return (
            <WrappeComponent 
            count={this.state.count} 
            incrementCount={this.incrementCount}
            />
)}
    }
    return HOCcounter
}
export default HOCcounter