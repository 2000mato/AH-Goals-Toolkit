
import React, {useState } from'react';

import LoginContext from './LoginContext'



const LoginContexProvider = ({children}) => {

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [loginStatus, isLoggedIn] = useState(false);


if (loginStatus) {
    return null;  // login page won't appear if user is logged in
}

return (
    <LoginContext.Provider value={{username, setUsername, password, setPassword, loginStatus, isLoggedIn}}>
        {children}
    </LoginContext.Provider>
)
}

export default LoginContexProvider;
