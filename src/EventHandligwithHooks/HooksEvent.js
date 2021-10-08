import React, { useState } from 'react';

import './style.css';

const HooksEvent = () => {

    const[username, setUsername] =useState('');
    const[password, setPassword] =useState('');
    const[showpassword, setShowPassword] =useState(true);
    return(
        <div>
            <input 
            type="text" 
            placeholder="Enter username"
            value={username}
            onChange={(e) => {setUsername(e.target.value)}}
            /><br/>
            <input 
            type="password" 
            placeholder="Enter password"
            value={password}
            onChange={(e) => {setPassword(e.target.value)}}
            />
            <h1>{username}</h1>

            <h1>{showpassword ? password : '*'.repeat(password.length)}</h1>
            <button onClick={(e) => setShowPassword(!showpassword)}>Show/Hide password</button>
        </div>
    )
}
export default HooksEvent