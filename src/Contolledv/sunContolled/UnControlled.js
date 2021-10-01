import React, { useRef, useState } from 'react';

function UnControlled(){

    function submitform(e){
        e.preventDefault();
        console.log("input",inputRef.current.value)
    }

    let inputRef=useRef(null)
    return(
        <div>
            <h2>UnControlled Components</h2>
            <form onSubmit={submitform}>
                <input type="text" ref={inputRef}/><br/><br/>
                <button>Submit</button>
            </form>
            
        </div>
    )
}
export default UnControlled