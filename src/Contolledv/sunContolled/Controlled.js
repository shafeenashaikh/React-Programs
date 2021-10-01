import React, { useState } from 'react';

function Controlled(){

    const[val,setVal]=useState('');
    return(
        <div>
            <h2>Controlled Components</h2>
            <input type="text" value={val} onChange={(e)=>setVal(e.target.value)}/>
            <h2>{val}</h2>
        </div>
    )
}
export default Controlled