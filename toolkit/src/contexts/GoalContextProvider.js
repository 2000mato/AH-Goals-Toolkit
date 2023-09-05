import React, {useState } from'react';

import Context from './Context';

const GoalContextProvider = ({children}) => {
    const [showPrompt, setShowPrompt] = useState(true);
    const [showGoal, setShowGoal] = useState(false);
    const [goalDetails, setGoalDetails] = useState({});
    const currentDate = new Date();
    const threeMonthsFromNow = new Date(currentDate.setMonth(currentDate.getMonth() + 3));
    const [goalText, setGoalText] = useState('');
    const [actionText, setActionText] = useState('');

    const defaultGoalDetails = {
        goalText: '',
        actionText: '',
        startDate: currentDate,
        endDate: threeMonthsFromNow
    };


    return (
        <Context.Provider value={{showPrompt, setShowPrompt, goalDetails, defaultGoalDetails, setGoalDetails, showGoal, setShowGoal, goalText, setGoalText, actionText, setActionText}}>
            {children}
        </Context.Provider>
    );
}

export default GoalContextProvider;