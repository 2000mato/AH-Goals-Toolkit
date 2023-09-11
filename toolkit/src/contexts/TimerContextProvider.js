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
    const [subBlock, setSubBlock] = useState(1)


    
    useEffect(() => {
        if (secondsRemaining <= 0 || timerStatus !== 'running') return;
    
        const interval = setInterval(() => {
            setSecondsRemaining(prevSeconds => {
                const newSeconds = prevSeconds - 1;
                setPercentage(newSeconds / totalSeconds * 100);
    
                const firstThreshold = Math.floor(totalSeconds * 0.34);
                const secondThreshold = firstThreshold + Math.floor(totalSeconds * 0.33);
                const subBlockLength = Math.floor(totalSeconds * 0.33 / 3);
    
                // Check for the start of the timer
           // Once time remaining is not totalSeconds, timer has started
            if (block === 1 && secondsRemaining === totalSeconds) {
                console.log('Timer beginning, entering block 1');
            }

            else if (block === 1 && newSeconds <= totalSeconds - firstThreshold) {
                setBlock(2);
                setSubBlock(1);
                console.log(`Transition to block 2, subBlock 1 ` + 'seconds remaining: ' +  secondsRemaining);
            }

            else if (block === 2 && subBlock === 1 && newSeconds <= totalSeconds - firstThreshold - subBlockLength) {
                setSubBlock(2);
                console.log(`Transition to block 2, subBlock 2 ` + 'seconds remaining: ' +  secondsRemaining);
            }

            else if (block === 2 && subBlock === 2 && newSeconds <= totalSeconds - firstThreshold - 2 * subBlockLength) {
                setSubBlock(3);
                console.log(`Transition to block 2, subBlock 3 ` + 'seconds remaining: ' +  secondsRemaining);
            }

            else if (block === 2 && subBlock === 3 && newSeconds <= totalSeconds - firstThreshold - 3 * subBlockLength) {
                setBlock(3);
                setSubBlock(0); // Reset subBlock since it's not relevant in the last block.
                console.log(`Transition to block 3 ` + 'seconds remaining: ' +  secondsRemaining);
            }

            else if (newSeconds <= 0.5) {
                setBlock(1);  // Starting block
                setSubBlock(1);  // Starting subBlock
                console.log('Timer has been reset');
            }

                return newSeconds;
            });
        }, 1000);
    
        return () => clearInterval(interval);  // Cleanup to clear the interval when the component is unmounted or when secondsRemaining or timerStatus changes.
    }, [secondsRemaining, timerStatus, block, subBlock, totalSeconds]); // Added dependencies to the useEffect
    


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