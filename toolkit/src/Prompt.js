import React from "react";   
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { useState, useContext } from "react";
import "./Prompt.css";
import Context from "./contexts/Context";


function Prompt() {
    // Context allows user input to be sent to context provider
    const { showPrompt, setShowPrompt, setGoalDetails, setShowGoal, goalText , setGoalText , actionText , setActionText } = useContext(Context);

    // Date related states for establishing time period
    const [startDate, setStartDate] = useState(new Date()); 
    const currentDate = new Date();
    // Three month period of goal pursuit is ideal, set by default, can be changed
    const threeMonthsFromNow = new Date(currentDate.setMonth(currentDate.getMonth() + 3));
    const [endDate, setEndDate] = useState(threeMonthsFromNow);

    // Goal related states 


    // Checks if input is valid
    const isValidInput = (input) => {
        if(!input) return false; // checks if input is empty or undefined
        if(typeof input !== "string") return false; // checks if input is not a string
        if(input.length < 3) return false; // example: check if input is too short
        // Add more validations as needed
        return true;
    }

    if (!showPrompt) {
        return null;  // Don't render anything if showPrompt is false
    }


    function containsOnlyNumbers(str) {
        return /^\d+$/.test(str);
    }
    
    // Handle goal submission
    const submitGoal = () => {
        if (!isValidInput(goalText) || containsOnlyNumbers(goalText) || !isValidInput(actionText) || containsOnlyNumbers(actionText)) {
            alert("Please enter a valid goal and action");
            return;
        }
        // The values for this object are taken in from user input fields
        const details = {
            goalText: goalText,
            actionText: actionText,
            startDate: startDate,
            endDate: endDate
        };
        // Collected values are sent to the context provider
        setGoalDetails(details);
        setShowPrompt(false);
        setShowGoal(true);
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
