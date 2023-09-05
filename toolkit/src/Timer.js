import React, { useContext } from "react";
import "./Timer.css";
import Context from "./contexts/Context"

function Timer(props) {

    const { secondsRemaining, setSecondsRemaining,percentage, 
        setPercentage,timerStatus, setTimerStatus,
        startTimer, pauseTimer, resetTimer} = useContext(Context);


    // Convert the remaining seconds into minute:second format
    const minutes = Math.floor(secondsRemaining / 60);
    const seconds = secondsRemaining % 60;

    return (
        <div>
            <div>{`${minutes}:${seconds < 10 ? '0' + seconds : seconds}`}</div>
            <svg width="120" height="120" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="54" stroke="#E6E6E6" strokeWidth="12" fill="none" />
                <circle 
                    cx="60" 
                    cy="60" 
                    r="54" 
                    stroke="#FF5733" 
                    strokeWidth="12" 
                    fill="none" 
                    strokeDasharray={`339.292 ${339.292}`} 
                    strokeDashoffset={`${339.292 * (1 - percentage / 100)}`} />
            </svg>
            <div>
                <button onClick = {startTimer}>Start</button>
                <button onClick = {pauseTimer}>Stop</button>
                <button onClick = {resetTimer}>Reset</button>
            </div>
        </div>
    );
}

export default Timer;
