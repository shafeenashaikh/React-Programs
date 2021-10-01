import React, { useState } from 'react';

function Counter1(){

    const[count,setCount]=useState(0);

    function updateCount(){
        setCount(count+1)
    }

    return(
        <div>
            <h2>{count}</h2>
            <button onClick={updateCount}>Update Count</button>
        </div>
    )
}
export default Counter1