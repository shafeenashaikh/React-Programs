import React, { useMemo,useState } from "react";

function UseMemo(){

    const[count,setCount]=useState(0)
   
    const noRender = useMemo(()=>{
        return(
            <div>
            <h1 style={{color:'red'}}>No render again {count}</h1>
            <h1 style={{color:'red'}}>UseEffect vs useMemo</h1>
            </div>
        )
    },[])
    
    return(
        <div>
           {noRender}

            <h1>Render it again and again {count} </h1>
            <h1>UseEffect vs useMemo</h1>

            <button onClick={()=>setCount(count+1)}>Click</button>
        </div>
    )
}
export default UseMemo