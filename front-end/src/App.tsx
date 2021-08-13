import logo from "./logo.svg";
import axios from "axios";
import "./App.css";

function App() {
  const onClick = () => {
    console.log(process.env.REACT_APP_BACKEND_URL as string);
    axios.get(process.env.REACT_APP_BACKEND_URL as string);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={onClick}>Send Request</button>
      </header>
    </div>
  );
}

export default App;
