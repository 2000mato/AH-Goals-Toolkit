import React, {useState , useEffect } from'react';

import Context from './Context';

const TimerContextProvider = ({children}) => {

    const initialMinutes = children.initialMinutes || 20;
    const totalSeconds = initialMinutes * 60;

    const [secondsRemaining, setSecondsRemaining] = useState(totalSeconds);
    const [percentage, setPercentage] = useState(100);
    const [timerStatus, setTimerStatus] = useState('stopped');
    
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

    const minutes = Math.floor(secondsRemaining / 60);
    const seconds = secondsRemaining % 60;



    return (
        <Context.Provider value={{    secondsRemaining, setSecondsRemaining,
            percentage, setPercentage,
            timerStatus, setTimerStatus,
            startTimer, pauseTimer, resetTimer, minutes , seconds}}>
            {children}
        </Context.Provider>
    );
}

export default TimerContextProvider;