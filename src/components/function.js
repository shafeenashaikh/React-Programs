import React from 'react';

const Welcom = (props) => {

    const {name, email} = props

    return(
        <div>
            <h1> Hello {name} <br/> {email}</h1>
        </div>
    )
}
export default Welcom;