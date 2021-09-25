import React, { useEffect, useState } from "react";

function UseEffect(){

    const[count,setCount]=useState(0);
    const[data,setData]=useState(100);

    useEffect(()=>{
        console.log(Math.random());
    },[count])
    return(
        <div>
            <h1>useEffect vs useMemo</h1>
            <h1>{count}</h1>
            <h1>{data}</h1>
            <button onClick={()=>setCount(count+1)}>Count</button>
            <button onClick={()=>setData(data+1)}>Data</button>
        </div>
    )
}
export default UseEffect