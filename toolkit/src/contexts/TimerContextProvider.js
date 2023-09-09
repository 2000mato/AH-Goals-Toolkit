import React, {useState , useEffect } from'react';

import TimerContext from './TimerContext';

const TimerContextProvider = ({children}) => {

    const [timerLength, setTimerLength] = useState(90); // 90 as initial value
    const [totalSeconds, setTotalSeconds] = useState(timerLength * 60);
    const [secondsRemaining, setSecondsRemaining] = useState(totalSeconds);
    const [percentage, setPercentage] = useState(100);
    const [timerStatus, setTimerStatus] = useState('stopped');
    
    useEffect(() => {
        // if the timer isn't running, the function to decrement the seconds will not run (duh)
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

    const setNewTimerLength = (length) => {
        setTimerLength(length);                 
        const newTotalSeconds = length * 60;    
        setSecondsRemaining(newTotalSeconds);   
        setPercentage(100);                     
        setTimerStatus('stopped');     
    }

    const minutes = Math.floor(secondsRemaining / 60);
    // seconds left is the remainder from however many seconds are left divided by 60 
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