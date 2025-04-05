import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    const newValue = count + 1;
    setCount(newValue);
  };

  const handleMinus = () => {
    const newValue = count - 1;
    setCount(newValue);
  };

  const handleReset=()=>{
	setCount(0);
  }

  return (
    <>
      <h1>Count: {count}</h1>
      <button className="btn" onClick={handleAdd}>
        Add 1
      </button>
      <button className="btn" onClick={handleMinus}>
        Minus 1
      </button>
      <button className="btn" onClick={handleReset}>Reset</button>
    </>
  );
}

export default App;
