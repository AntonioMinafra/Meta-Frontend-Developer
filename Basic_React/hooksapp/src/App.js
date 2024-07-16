import logo from './logo.svg';
import InputComponent from './input';
import RegisterForm from './form';
import TextInputWithFocusButton from './focusButton';
import Test from './test';
import React, {useState} from 'react';
import './App.css';

function App() {
  const [word, setWord] = React.useState(`I'm Test`)

  function handleClick(){
    setWord("test")
  }
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <InputComponent />
        <RegisterForm />
        <TextInputWithFocusButton />
        <Test message={word + " with use.state"}/>
        <button onClick={handleClick}>click me</button>
      </header>
    </div>
  );
}

export default App;
