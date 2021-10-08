import React, { useState } from 'react';

import './style.css';

const HooksEvent = () => {

    const[username, setUsername] =useState('');
    const[password, setPassword] =useState('');
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
            <h1>{password}</h1>
        </div>
    )
}
export default HooksEvent