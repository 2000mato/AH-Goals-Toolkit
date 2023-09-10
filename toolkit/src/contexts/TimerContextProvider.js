import React, {useState , useEffect } from'react';

import TimerContext from './TimerContext';

const TimerContextProvider = ({children}) => {

    const [timerLength, setTimerLength] = useState(90); // 90 as initial value
    const [totalSeconds, setTotalSeconds] = useState(timerLength * 60);
    const [secondsRemaining, setSecondsRemaining] = useState(totalSeconds);
    const [percentage, setPercentage] = useState(100);
    const [timerStatus, setTimerStatus] = useState('stopped');
    const [inputValue, setInputValue] = useState(0)
    
    useEffect(() => {
        // if the timer isn't running, the function to decrement the seconds will not run (duh)
        if (secondsRemaining <= 0 || timerStatus !== 'running') return;
    
        // every 1000ms , seconds remaining is decreased by 1, the percentage corrsponds to this
        const interval = setInterval(() => {
            setSecondsRemaining(prevSeconds => {
                const newSeconds = prevSeconds - 1;
                setPercentage(newSeconds / totalSeconds * 100);
                console.log(`the new percentage is ${percentage}`)
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
        console.log('minutes are ' +minutes + ', seconds are '  + seconds);
    }

    const minutes = Math.floor(secondsRemaining / 60);
    const seconds = secondsRemaining % 60;



    return (
        <TimerContext.Provider value={{    secondsRemaining, setSecondsRemaining,
            percentage, setPercentage,
            timerStatus, setTimerStatus,
            startTimer, pauseTimer, resetTimer, minutes , seconds, timerLength, totalSeconds, setTimerLength , setNewTimerLength, inputValue, setInputValue}}>
            {children}
        </TimerContext.Provider>
    );
}

export default TimerContextProvider;