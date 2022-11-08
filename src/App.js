import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import ChildOne from "./components/ChildOne";

function App() {
  const [fName, setfName] = useState("Richa");
  const [lName, setlName] = useState("Singh");

  const handleClickOne = (value) => {
    setfName(value);
  };
  const handleClickTwo = (value) => {
    setlName(value);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>What is Prop Drilling ?</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React useContext Hook
        </a>
        <div>This is a Parent component</div>
        <ChildOne
          fName={fName}
          lName={lName}
          handleClickOne={handleClickOne}
          handleClickTwo={handleClickTwo}
        />
        <button onClick={() => handleClickOne("Hello from App")}>
          Childone
        </button>
        <button onClick={() => handleClickTwo("Hii from App")}>Childone</button>
      </header>
    </div>
  );
}

export default App;
