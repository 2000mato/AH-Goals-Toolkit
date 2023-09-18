
import React, {useState } from'react';

import LoginContext from './LoginContext'



const LoginContexProvider = ({children}) => {



    const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [loginStatus, setLoginStatus] = useState(false);

return (
    <LoginContext.Provider value={{username, setUsername, password, setPassword, loginStatus, setLoginStatus}}>
        {children}
    </LoginContext.Provider>
)
}

export default LoginContexProvider;
