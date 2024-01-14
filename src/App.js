import CounterApp from './Counter';
import CounterWithToolKit from './CounterWithToolKit';
import './App.css';

function App() {
  return (
    <div className="App">
      <p className="App-header">
        Counter App
      </p>
      <CounterApp />
      <hr />
      <p className="App-header">
        Counter App wih toolkit
      </p>
      <CounterWithToolKit />
    </div>
  );
}

export default App;
