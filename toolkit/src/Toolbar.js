import React, {useContext} from 'react';
import Context from './contexts/Context';

function Toolbar() {

    const {defaultGoalDetails, setGoalDetails, setShowPrompt , setShowGoal , setGoalText , setActionText} = useContext(Context);

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