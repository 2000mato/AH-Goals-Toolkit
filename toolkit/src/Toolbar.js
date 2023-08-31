import React, {useContext} from 'react';
import Context from './Context';

function Toolbar() {

const {setShowModal} = useContext(Context);


const toggleModal = () => {
    setShowModal(prevState => !prevState);
} 


    return(
        <div className='toolbar'>
            <button className='btn btn-outline-secondary' onClick={toggleModal}>Show Modal</button>
        </div>
    )
}

export default Toolbar;