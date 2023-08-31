import './App.css';
import GoalPrompt from './Prompt';
import ContextProvider from './ContextProvider';


function App() {
  return (
    <div className="App">
      <ContextProvider >
      <header className="App-header">
        <GoalPrompt />
      </header>
      </ContextProvider>
    </div>
  );
}

export default App;
