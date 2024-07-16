import logo from './logo.svg';
import Fruits from "./Fruits";
import FruitsCounter from "./FruitsCounter";
import InputComponent from './input';
import RegisterForm from './form';
import TextInputWithFocusButton from './focusButton';
import Test from './test';
import React, {useState} from 'react';
import './App.css';



function App() {

  function Main(props) {
    return <Header msg={props.msg} />;
  };

  function Header(props) {
    return (
      <div style={{ border: "10px solid whitesmoke" }}>
      <h1>Header here</h1>
      <Wrapper msg={props.msg} />
      </div>
    );
  };

  function Wrapper(props) {
    return (
      <div style={{ border: "10px solid lightgray" }}>
      <h2>Wrapper here</h2>
      <Button msg={props.msg} />
      </div>
    );
  };

  function Button(props) {
    return (
      <div style={{ border: "20px solid orange" }}>
      <h3>This is the Button component</h3>
      <button onClick={() => alert(props.msg)}>Click me!</button>
      </div>
    );
  };

  const [word, setWord] = React.useState(`I'm Test`)

  function handleClick(){
    setWord("test")
  }

  const [fruits] = React.useState([
    {fruitName: 'apple', id: 1},
    {fruitName: 'banana', id: 2},
    {fruitName: 'plum', id: 3},
  ]);

  return (
    <div className="App">
    <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    {/* <InputComponent />
      <RegisterForm />
      <TextInputWithFocusButton /> */}

      <h1>Where should the state go?</h1>
      <Fruits fruits={fruits} />
      <FruitsCounter fruits={fruits}/>

      <Test message={word + " with use.state"}/>
      <button onClick={handleClick}>click me</button>
      <Main
      msg="I passed through the Header and the Wrapper and I reached the Button component"
      />
      </header>
      </div>
    );
  }

  export default App;
