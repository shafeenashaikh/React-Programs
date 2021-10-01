import React,{useState} from 'react';

function Name(){

    const[data,setData]=useState('Bruce')

    function updateData(){
        setData("Diana")
    }
    return(
        <div>
            <h2>{data}</h2>
            <button onClick={updateData}>Update Data</button>
        </div>
    )
}
export default Name;