import './App.css';
import Prompt from './Prompt';
import GoalContextProvider from './contexts/GoalContextProvider';
import Toolbar from './Toolbar';
import DefinedGoals from './DefinedGoal';
import Timer from './Timer';
import TimerContextProvider from './contexts/TimerContextProvider';

function App() {
  return (
    <div className="App">
      <TimerContextProvider>
      <GoalContextProvider >
        <Toolbar />
        <Timer />
        <DefinedGoals />
        <Prompt />
      </GoalContextProvider>
      </TimerContextProvider>
    </div>
  );
}

export default App;
