import React, {useState } from'react';

import Context from './Context';

const ContextProvider = ({children}) => {
    const [showModal, setShowModal] = useState(false);
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
        <Context.Provider value={{showModal, setShowModal, goalDetails, defaultGoalDetails, setGoalDetails}}>
            {children}
        </Context.Provider>
    );
}

export default ContextProvider;