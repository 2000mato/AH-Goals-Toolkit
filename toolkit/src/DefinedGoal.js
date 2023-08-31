import React, {useContext} from 'react';
import Context from './Context';


function DefinedGoal() {

    const { goalDetails } = useContext(Context);



    return(
        <div>
        <h2>Your Defined Goal:</h2>
        <p><strong>Goal:</strong> {goalDetails.goalText}</p>
        <p><strong>Action:</strong> {goalDetails.actionText}</p>
        <p><strong>Start Date:</strong> {goalDetails.startDate ? goalDetails.startDate.toLocaleDateString() : 'Not defined'}</p>
        <p><strong>End Date:</strong> {goalDetails.endDate ? goalDetails.endDate.toLocaleDateString() : 'Not defined'}</p>
    </div>
    )
}

export default DefinedGoal;