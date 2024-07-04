import logo from './logo.svg';
import './App.css';

function App() {
  function handleClick() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);
    let userInput = prompt('type of number');
    alert(`Computer number: ${randomNum}, Your guess ${userInput}`);
  }

  return (
    <div className="App">
    <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <button onClick={handleClick}>Guess the number between 1 and 3</button>
    <p>
    Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
    >
    Learn React
    </a>
    </header>
    </div>
  );
}

export default App;
