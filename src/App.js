import saxaphone from './saxaphone.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={saxaphone} className="App-logo" alt="logo" />
        <p>
          Robert Kemp
          <hr></hr>
          Musician
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Enter
        </a>
      </header>
    </div>
  );
}

export default App;
