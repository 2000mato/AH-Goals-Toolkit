import './App.css';
import Prompt from './Prompt';
import GoalContextProvider from './contexts/GoalContextProvider';
import Toolbar from './Toolbar';
import DefinedGoals from './DefinedGoal';
import Timer from './Timer';
import TimerContextProvider from './contexts/TimerContextProvider';
import Login from './Login';

function App() {
  return (
    <div className="App">
      <TimerContextProvider>
      <GoalContextProvider >
        <Toolbar />
        <Login />
        <Timer />
        <DefinedGoals />
        <Prompt />
      </GoalContextProvider>
      </TimerContextProvider>
    </div>
  );
}

export default App;
