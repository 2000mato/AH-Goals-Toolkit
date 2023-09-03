import React, {useState, useEffect} from "react";
import "./Timer.css";

function Timer(props) {
    const initialMinutes = props.initialMinutes || 20; // Set a default value if not provided
    const totalSeconds = initialMinutes * 60; // Convert minutes to seconds.
    const [secondsRemaining, setSecondsRemaining] = useState(totalSeconds);
    const [percentage, setPercentage] = useState(100);
    const [timerStatus, setTimerStatus] = useState('stopped'); // possible values: 'stopped', 'running', 'paused'

    useEffect(() => {
        if (secondsRemaining <= 0 || timerStatus !== 'running') return;
        const interval = setInterval(() => {
            setSecondsRemaining(prevSeconds => {
                const newSeconds = prevSeconds - 1;
                setPercentage(newSeconds / totalSeconds * 100);
                return newSeconds;
            });
        }, 1000);
    
        return () => clearInterval(interval);
    }, [secondsRemaining, totalSeconds, timerStatus]);


    const startTimer = () => {
        setTimerStatus('running');
    }
    
    const pauseTimer = () => {
        setTimerStatus('paused');
    }
    
    const resetTimer = () => {
        setSecondsRemaining(totalSeconds);
        setPercentage(100);
        setTimerStatus('stopped');
    }


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
