import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  console.log(import.meta.env.VITE_NODE_ENV);
  return (
    <>
      <div className="max-w-[400px] m-auto   py-10  flex   justify-between items-center">
        <button
          className="text-2xl font-bold"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
        <p className="text-2xl font-bold">{count}</p>
        <button
          className="text-2xl font-bold"
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
      </div>
    </>
  );
}

export default App;
