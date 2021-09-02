import React, {useState } from 'react';
import User from './user';
function Useeffect(){
    const [count,setcount] = useState(10)
    const [data,setData] = useState(100)

   
    return(
        <div>
            <User count={count} data={data}/>
            <button onClick={() => setcount(count+1)}>update count</button>
            <button onClick={() => setData(data+1)}>update data</button>
        </div>
    )
}
export default Useeffect;