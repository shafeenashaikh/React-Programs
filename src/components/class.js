import React from 'react';

class Greeting extends React.Component {
    render(){

        const {name, email } = this.props
        return(
        <h1> Hello {name}  <br/> {email}</h1>
        )
    }
}
export default Greeting;