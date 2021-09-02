import React, { useEffect}  from 'react';
function User(props){

    useEffect(() => {
       alert('count is' + props.count)
    },[props.count, props.data])
    
   

    return(
        <div>
            <h2>count props: {props.count}</h2>
            <h2>data props: {props.data}</h2>
        </div>
    )
}
export default User;