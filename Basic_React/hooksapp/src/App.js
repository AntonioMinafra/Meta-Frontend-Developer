import logo from './logo.svg';
import InputComponent from './input';
import RegisterForm from './form';
import TextInputWithFocusButton from './focusButton';
import Test from './test';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <InputComponent />
        <RegisterForm />
        <TextInputWithFocusButton />
        <Test />
        <Test />
        <Test />
      </header>
    </div>
  );
}

export default App;
