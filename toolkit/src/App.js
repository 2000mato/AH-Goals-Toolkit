import './App.css';
import Prompt from './Prompt';
import ContextProvider from './ContextProvider';
import Toolbar from './Toolbar';
import DefinedGoals from './DefinedGoal';

function App() {
  return (
    <div className="App">
      <ContextProvider >
        <Toolbar />
        <DefinedGoals />
      <header className="App-header">
        <Prompt />
      </header>
      </ContextProvider>
    </div>
  );
}

export default App;
