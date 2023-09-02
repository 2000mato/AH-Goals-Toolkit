import React, {useContext} from 'react';
import Context from './Context';

function Toolbar() {


    const {setShowModal} = useContext(Context);
    const {defaultGoalDetails, setGoalDetails} = useContext(Context);

    const toggleModal = () => {
        setShowModal(prevState => !prevState);
    } 


    return(
        <div className='toolbar'>
            <button className='btn btn-outline-secondary' onClick={toggleModal}>Set a goal</button>
            <button className='btn btn-outline-secondary' onClick={() => setGoalDetails(defaultGoalDetails)}>Clear Goal</button>
        </div>
    )
}

export default Toolbar;