import logo from "./logo.svg";
import axios from "axios";
import "./App.css";

function App() {
  const onClick = () => {
    axios.get("https://8083-moccasin-louse-v4vig3v0.ws-eu15.gitpod.io/test");
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
