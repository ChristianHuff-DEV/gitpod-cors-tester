import logo from "./logo.svg";
import axios from "axios";
import "./App.css";

function App() {
  const onClick = () => {
    axios.get(process.env.REACT_APP_BACKEND_URL + "/test");
  };

  const onClickWithCredentials = () => {
    axios.get(process.env.REACT_APP_BACKEND_URL + "/test", {
      withCredentials: true,
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={onClick}>Send Request</button>
        <button onClick={onClickWithCredentials}>
          Send Request (withCredentials)
        </button>
      </header>
    </div>
  );
}

export default App;
