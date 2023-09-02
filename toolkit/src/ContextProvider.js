import React, {useState } from'react';

import Context from './Context';

const ContextProvider = ({children}) => {
    const [showPrompt, setShowPrompt] = useState(true);
    const [goalDetails, setGoalDetails] = useState({});
    const currentDate = new Date();
    const threeMonthsFromNow = new Date(currentDate.setMonth(currentDate.getMonth() + 3));

    const defaultGoalDetails = {
        goalText: '',
        actionText: '',
        startDate: currentDate,
        endDate: threeMonthsFromNow
    };


    return (
        <Context.Provider value={{showPrompt, setShowPrompt, goalDetails, defaultGoalDetails, setGoalDetails}}>
            {children}
        </Context.Provider>
    );
}

export default ContextProvider;