import React, { useContext } from'react';
import './Login.css'
import LoginContext from './contexts/LoginContext';

function Login(){

const {username, setUsername, password, setPassword, loginStatus, isLoggedIn } = useContext(LoginContext);
 
    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        console.log(` username is ${username}, password is ${password}`)

        // Handle response here (e.g., redirect, show error, etc.)
    };


    return(
        <div className="login">Login


        <form onSubmit = {handleSubmit}>
        
        <input type="text" placeholder="Username" value={username}  
        onChange={(e) => setUsername(e.target.value)} required />
        
        <input type="password" placeholder="Password" value={password} 
        onChange={(e) => setPassword(e.target.value)} required />
        
        <button type='submit' >Login</button>


        
        </form>
        
        </div>
    )
}

export default Login;