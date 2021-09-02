import React, {Component } from 'react';
class Updating extends Component{

    constructor(){
        super()
        this.state ={
            name: 'Diana'
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

    shouldComponentUpdate(){
        console.log("shouldcomponentsupdate")
        return true
    }
    
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("getSanpShotBeforeUpdate")
        return null
    }

    componentDidUpdate(){
        console.log("componentDidUpdate")
    }

    changeState = () => {
        this.setState({
            name: 'Diana'
        })
    }

    render(){
        console.log("render")
        return(
            <div>
                <div>Upadte</div>
                <button onClick={this.changeState}>change State</button>
            </div>
        )
    }
}
export default Updating;