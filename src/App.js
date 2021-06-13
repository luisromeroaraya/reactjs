import FunctionClock from "./components/FunctionClock";
import ClassClock from "./components/ClassClock";
import ClassButtonContainer from "./components/ClassButtonContainer";
import Products from './components/Products';
import logo from "./logo.svg";
import "./App.css";

function App(props) {
  // Added props as a parameter to accept props from parent
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello {props.world}!</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <FunctionClock />
        <ClassClock />
      </header>
      <main className="App-main">
        <ClassButtonContainer />
        <Products />
      </main>
      <footer className="App-footer">
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
      </footer>
    </div>
  );
}

export default App;
