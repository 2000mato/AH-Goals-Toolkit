import React, {useState } from'react';

import Context from './Context';

const ContextProvider = ({children}) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <Context.Provider value={{showModal, setShowModal}}>
            {children}
        </Context.Provider>
    );
}

export default ContextProvider;