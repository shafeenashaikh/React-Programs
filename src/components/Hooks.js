import React, { useState } from 'react';
function Hooks(){

    const [data, setdata] = useState('Bruce')
    return(
        <div>
            <h2>{data}</h2>
            <button onClick={() => setdata('Diana')}>Update state</button>
        </div>
    )
}
export default Hooks;