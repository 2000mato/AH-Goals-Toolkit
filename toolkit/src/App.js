import './App.css';
import Prompt from './Prompt';
import GoalContextProvider from './contexts/GoalContextProvider';
import Toolbar from './Toolbar';
import DefinedGoals from './DefinedGoal';
import Timer from './Timer';
import TimerContextProvider from './contexts/TimerContextProvider';
import Login from './Login';
import LoginContextProvider from './contexts/LoginContextProvider';

function App() {
  return (
    <div className="App">
      <TimerContextProvider>
      <GoalContextProvider >
        <LoginContextProvider>
        <Toolbar />
        <Login />
        <Timer />
        <DefinedGoals />
        <Prompt />
        </LoginContextProvider>
      </GoalContextProvider>
      </TimerContextProvider>
    </div>
  );
}

export default App;
