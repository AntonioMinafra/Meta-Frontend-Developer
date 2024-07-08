import logo from './logo.svg';
import InputComponent from './input';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <InputComponent/>
      </header>
    </div>
  );
}

export default App;
