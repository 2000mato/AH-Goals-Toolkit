import React, {useContext} from 'react';
import GoalContext from './contexts/GoalContext';

function Toolbar() {

    const {defaultGoalDetails, setGoalDetails, setShowPrompt , setShowGoal , setGoalText , setActionText} = useContext(GoalContext);

    const togglePrompt = () => {
        setShowPrompt(true);
        setGoalDetails(defaultGoalDetails);
        setShowGoal(false);
        setGoalText(defaultGoalDetails.goalText);
        setActionText(defaultGoalDetails.actionText);
    } 


    return(
        <div className='toolbar'>
            <button className='btn btn-outline-secondary' onClick={togglePrompt}>Set a goal</button>
            <button className='btn btn-outline-secondary' onClick={togglePrompt}>Clear Goal</button>
        </div>
    )
}

export default Toolbar;