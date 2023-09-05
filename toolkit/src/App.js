import './App.css';
import Prompt from './Prompt';
import GoalContextProvider from './GoalContextProvider';
import Toolbar from './Toolbar';
import DefinedGoals from './DefinedGoal';
import Timer from './Timer';

function App() {
  return (
    <div className="App">
      <GoalContextProvider >
        <Toolbar />
        <Timer />
        <DefinedGoals />
        <Prompt />
      </GoalContextProvider>
    </div>
  );
}

export default App;
