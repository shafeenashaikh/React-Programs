import React, { Component } from 'react';

class OnChange extends Component {

    constructor(){
        super();
        this.state = {text: ''}
    }

    handleSubmit(e) {
        e.preventDefault();
        let text = this.state.text;
        console.log('form submitted value',text)
        this.setState({text: ''});
    }

    handleChange(e) {
        let text = e.target.value;
        console.log(text);
        this.setState({text: text});
    }
    render() {
        return (
            <div>
                <h2>TODO</h2>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" onChange={this.handleChange.bind(this)} value={this.state.text}/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default OnChange;