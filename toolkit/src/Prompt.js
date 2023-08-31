import React from "react";   
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { useState, useContext } from "react";
import "./Prompt.css";
import Context from "./Context";


function Prompt() {
    // Context
    const { showModal, setShowModal, setGoalDetails } = useContext(Context);

    // Date related states
    const [startDate, setStartDate] = useState(new Date()); 
    const currentDate = new Date();
    const threeMonthsFromNow = new Date(currentDate.setMonth(currentDate.getMonth() + 3));
    const [endDate, setEndDate] = useState(threeMonthsFromNow);

    // Goal related states 
    const [goalText, setGoalText] = useState('');
    const [actionText, setActionText] = useState('');

    // Handle goal submission
    const submitGoal = () => {
        const details = {
            goalText: goalText,
            actionText: actionText,
            startDate: startDate,
            endDate: endDate
        };
        setGoalDetails(details);
        setShowModal(false);
    }

    if (!showModal) {
        return null;  // Don't render anything if showModal is false
    }

    return (
        <div className="goal-prompt-container">
            <div>What is your goal?</div>
            <input 
                type="text" 
                value={goalText}
                onChange={(e) => setGoalText(e.target.value)}
                placeholder="Make it slightly more lofty than you think you can achieve. Without stress, growth does not occur" 
            />
            <div>What is the major block of action required to achieve this goal</div>
            <input 
                type="text" 
                value={actionText}
                onChange={(e) => setActionText(e.target.value)}
                placeholder="I am going to x 4x/week , for periods of 30 minutes, 15 of which are spent doing y" 
            />
            <div>For how long will you pursue this goal, on what days and for how long?(It is advised to use a period of roughly 12 weeks, or 3 months)</div>
            <div>
                <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                <DatePicker selected={endDate} onChange={date => setEndDate(date)} />
                <button className="goal-prompt-button" onClick={submitGoal}>Create new goal</button>
            </div>
        </div>
    )
}

export default Prompt;
