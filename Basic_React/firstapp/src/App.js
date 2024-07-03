import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav.js';
import Promo from './components/Promo.js';
import Intro1 from './components/Intro1.js';
import Intro2 from './components/Intro2.js';
import Intro3 from './components/Intro3.js';
import Footer from './components/Footer.js';
import Card from "./components/card.js";

function Heading() {
  return (
    <h1>This is an h1 heading</h1>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Card h2="First card's h2" h3="First card's h3"/>
        <Heading/>
        <Intro1 name ="My name is Antonio"/>
        <Intro1 name ="My name is Luca"/>
        <Nav/>
        <Promo/>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
