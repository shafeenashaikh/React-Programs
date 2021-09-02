import React, {Component} from 'react';
import ChildComponent from './childComponent';

class ParentComponent extends Component{

    constructor(){
        super();
        this.state = {
            parentName: 'parent'
        }
        this.greetparent = this.greetparent.bind(this)
    }

greetparent(childName){
    alert(`Hello ${this.state.parentName} from ${childName}`)
}

    render(){

        return(
            <div>
                    <ChildComponent greetHandler={this.greetparent}/>
            </div>
        )
    }
}
export default ParentComponent;