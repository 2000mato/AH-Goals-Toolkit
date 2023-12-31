import React from "react";   
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from "react";
import "./GoalPrompt.css";


function GoalPrompt() {
    // add a usestate method later based on clicking a button to reset the goal or intitialize the goal
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null); // If you need an end date as well


    return (
        <div className = "goal-prompt-container">

            <div>What is your goal?</div>
            <input type="text" placeholder = "Make it slightly more lofty than you think you can achieve. Without stress, growth does not occur" />
            <div>What is the major block of action required to achieve this goal</div>
            <input type = "text" placeholder ="I am going to x 4x/week , for periods of 30 minutes, 15 of which are spent doing y" />
            <div>For how long will you pursue this goal, on what days and for how long?</div>
            <div>
            <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
            {/* If you need an end date as well */}
            <DatePicker selected={endDate} onChange={date => setEndDate(date)} />
        </div>
        </div>
        
    )
}

export default GoalPrompt;