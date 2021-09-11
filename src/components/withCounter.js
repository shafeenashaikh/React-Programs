import React from 'react';

const UpdatedComponent = OriginalComponent => {
    class NewComponent extends React.Component{

        constructor(){
            super()
            this.state = {
                count: 0
            }
        }
    
        incrementcount = () => {
            this.setState(prevState => {
                return {count: prevState.count+1}
            })
        }

        render(){
            return <OriginalComponent count={this.state.count} incrementcount={this.incrementcount}/>
        }
    }
    return NewComponent
}
export default UpdatedComponent