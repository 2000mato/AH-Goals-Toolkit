import './Login.css'
import React, { useState } from'react';
function Login(){


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        // Handle response here (e.g., redirect, show error, etc.)
    };


    return(
        <div className="login">Login


        <form onSubmit = {handleSubmit}>
        
        <input type="text" placeholder="Username" value={username}  
        onChange={(e) => setUsername(e.target.value)} required />
        
        <input type="password" placeholder="Password" value={password} 
        onChange={(e) => setPassword(e.target.value)} required />
        
        <button type='submit'>Login</button>
        
        </form>
        
        </div>
    )
}

export default Login;