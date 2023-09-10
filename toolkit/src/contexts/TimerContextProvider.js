import React, {useState , useEffect } from'react';

import TimerContext from './TimerContext';

const TimerContextProvider = ({children}) => {


    // timerLength is the entire work period , represented as minutes
    const [timerLength, setTimerLength] = useState(90); // 90 as initial value
    // Total seconds is 
    const [totalSeconds, setTotalSeconds] = useState(timerLength * 60);
    // used to compare to total period of time for the percentage of time remaining
    const [secondsRemaining, setSecondsRemaining] = useState(totalSeconds);
    const [percentage, setPercentage] = useState(100);
    // is the timer running ?
    const [timerStatus, setTimerStatus] = useState('stopped');
    
    useEffect(() => {
        // if the timer state isn't running, the function to decrement the seconds will not run (duh)
        if (secondsRemaining <= 0 || timerStatus !== 'running') return;
    
        // every 1000ms , seconds remaining is decreased by 1, the percentage corrsponds to this
        const interval = setInterval(() => {
            setSecondsRemaining(prevSeconds => {
                const newSeconds = prevSeconds - 1;
                setPercentage(newSeconds / totalSeconds * 100);
                return newSeconds;
            });
        }, 1000);
    
        return () => clearInterval(interval);
    }, [secondsRemaining, totalSeconds, percentage, timerStatus]);


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

    const setNewTimerLength = (lengthInMinutes) => {
        const newTotalSeconds = lengthInMinutes * 60;
        setTimerLength(lengthInMinutes);
        setTotalSeconds(newTotalSeconds);
        setSecondsRemaining(newTotalSeconds);
        setPercentage(100);
        setTimerStatus('stopped');
    }

    const minutes = Math.floor(secondsRemaining / 60);
    const seconds = secondsRemaining % 60;



    return (
        <TimerContext.Provider value={{    secondsRemaining, setSecondsRemaining,
            percentage, setPercentage,
            timerStatus, setTimerStatus,
            startTimer, pauseTimer, resetTimer, minutes , seconds, timerLength, totalSeconds, setTimerLength , setNewTimerLength}}>
            {children}
        </TimerContext.Provider>
    );
}

export default TimerContextProvider;