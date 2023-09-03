import './App.css';
import Prompt from './Prompt';
import ContextProvider from './ContextProvider';
import Toolbar from './Toolbar';
import DefinedGoals from './DefinedGoal';
import Timer from './Timer';

function App() {
  return (
    <div className="App">
      <ContextProvider >
        <Toolbar />
        <Timer />
        <DefinedGoals />
        <Prompt />
      </ContextProvider>
    </div>
  );
}

export default App;
