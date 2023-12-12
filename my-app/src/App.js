import logo from './logo.svg';
import './App.css';
// import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';

function App() {
  return (
    <div className="App">
      <FunctionalGreetingWithProps greeting="nice to meet you" name="Cristina" age="36" />
    </div>
  );
}

export default App;
