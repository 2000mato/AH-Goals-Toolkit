import React, { useContext } from "react";
import "./Timer.css";
import TimerContext from "./contexts/TimerContext"

function Timer(props) {

    const { percentage, startTimer, pauseTimer, 
        resetTimer, minutes, seconds ,timerLength, setTimerLength, setNewTimerLength, block, setBlock, subBlock, setSubBlock } = useContext(TimerContext);

        const handleSubmit = (e) => {
            e.preventDefault();
            setNewTimerLength(timerLength);
        }


        const colors = {
            1: "#0000FF",
            2: {
              0: "#FFFF00",
              1: "#008000",
              2: "#00FFFF",
            },
            3: "#800080",
          };

          const getCurrentColor = () => {
            if (block === 2) {
                return colors[2][subBlock];
              }
              return colors[block];
          }

    return (
        <div>
            <div>{`${minutes}:${seconds < 10 ? '0' + seconds : seconds}`}</div>
            <svg width="120" height="120" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="54" stroke={getCurrentColor()} strokeWidth="12" fill="none" />
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
                value={timerLength} 
                onChange={(e) => setTimerLength(Number(e.target.value))}
                placeholder="Set New Timer in Minutes"
                 />
                <button type="submit">Set Timer</button>
            </form>
            </div>
        </div>
    );
}

export default Timer;
