import React, {useContext} from 'react';
import Context from './Context';

function Toolbar() {

    const {defaultGoalDetails, setGoalDetails, setShowPrompt} = useContext(Context);

    const togglePrompt = () => {
        setShowPrompt(true);
    } 


    return(
        <div className='toolbar'>
            <button className='btn btn-outline-secondary' onClick={togglePrompt}>Set a goal</button>
            <button className='btn btn-outline-secondary' onClick={() => setGoalDetails(defaultGoalDetails)}>Clear Goal</button>
        </div>
    )
}

export default Toolbar;