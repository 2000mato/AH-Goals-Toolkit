import React, {useState } from'react';

import Context from './Context';

const ContextProvider = ({children}) => {
    const [showModal, setShowModal] = useState(false);
    const [goalDetails, setGoalDetails] = useState({});
    
    return (
        <Context.Provider value={{showModal, setShowModal, goalDetails, setGoalDetails}}>
            {children}
        </Context.Provider>
    );
}

export default ContextProvider;