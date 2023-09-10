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
    const [block, setBlock] = useState(1);
    // subBlock divicdes the middle block into smaller blocks
    const [subBlock, setSubBlock] = useState(0)


    
    useEffect(() => {
        // if the timer state isn't running, the function to decrement the seconds will not run (duh)
        if (secondsRemaining <= 0 || timerStatus !== 'running') return;
    
        // every 1000ms , seconds remaining is decreased by 1, the percentage corrsponds to this
        const interval = setInterval(() => {
            setSecondsRemaining(prevSeconds => {
                const newSeconds = prevSeconds - 1;
                setPercentage(newSeconds / totalSeconds * 100);

                const firstThreshold = totalSeconds * 0.34;
                const subBlock = (totalSeconds * 0.33) / 3;

                if (newSeconds <= totalSeconds - firstThreshold && block === 1 ){
                    setBlock(2);
                    console.log('entering block 2, subBlock 1')
                }
                else if (newSeconds <= totalSeconds - firstThreshold - subBlock && block === 0 ){
                    setBlock(1);
                    console.log('entering subBlock 2')
                }
                else if (newSeconds <= totalSeconds - firstThreshold - subBlock * 2 && block === 1 ){
                    setBlock(2);
                    console.log('entering subBlock 3')
                }
                else if (newSeconds <= totalSeconds - firstThreshold - subBlock * 3 && block === 2){
                    setBlock(3);
                    setSubBlock(0);
                    console.log('block 2 complete, entering block 3')
                }

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
            startTimer, pauseTimer, resetTimer, minutes , seconds, timerLength, totalSeconds, setTimerLength , setNewTimerLength, block, setBlock, subBlock, setSubBlock}}>
            {children}
        </TimerContext.Provider>
    );
}

export default TimerContextProvider;