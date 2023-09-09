import React, { useContext } from "react";
import "./Timer.css";
import TimerContext from "./contexts/TimerContext"

function Timer(props) {

    const { percentage, startTimer, pauseTimer, 
        resetTimer, minutes, seconds , setTimerLength, setNewTimerLength } = useContext(TimerContext);

        console.log(useContext)

        const handleSubmit = (e) => {
            e.preventDefault();
            setNewTimerLength(parseInt(minutes) * 60 + parseInt(seconds));
        }

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
                <form onSubmit={handleSubmit}>
                <input 
                    type="number" 
                    min="1" 
                    max="120" 
                    step="1" 
                    onChange={(e) => setTimerLength(Number(e.target.value))}
                    placeholder="Set New Timer"
                />
                <button type="submit">Set Timer</button>
            </form>
            </div>
        </div>
    );
}

export default Timer;
