import React from 'react';

function Student(props){
    return(
        <div>
            <h2>Name: {props.name}</h2>
            <h2>Email: {props.Email}</h2>
            <h2>Contact: {props.contact}</h2>
        </div>
    )
}
export default Student