import React, {useContext} from 'react';
import Context from './Context';

function Toolbar() {

    const {defaultGoalDetails, setGoalDetails, setShowPrompt , setShowGoal} = useContext(Context);

    const togglePrompt = () => {
        setShowPrompt(true);
        setGoalDetails(defaultGoalDetails);
        setShowGoal(false);
    } 


    return(
        <div className='toolbar'>
            <button className='btn btn-outline-secondary' onClick={togglePrompt}>Set a goal</button>
            <button className='btn btn-outline-secondary' onClick={togglePrompt}>Clear Goal</button>
        </div>
    )
}

export default Toolbar;