import React, {useState } from'react';

import Context from './Context';

const TimerContextProvider = ({children}) => {


    return (
        <Context.Provider value={{}}>
            {children}
        </Context.Provider>
    );
}

export default TimerContextProvider;