import "./App.css";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);

  const ramdomNumber = () => setNumber(Math.floor(Math.random() * 100) + 1);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{number}</h1>
        <button onClick={ramdomNumber}>Create new number</button>
      </header>
    </div>
  );
}

export default App;
