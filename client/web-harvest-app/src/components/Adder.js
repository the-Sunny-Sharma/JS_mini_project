import { useState } from "react";
import "../styles/adder.css";

export default function Adder() {
  const [count, setCount] = useState(0);

  // Function to decrement count if it's greater than 0
  const handleDecrement = () => {
    if (count > 0) {
      setCount((c) => c - 1);
    }
  };

  return (
    <div className="container-add">
      <button className="btn-add minus" onClick={handleDecrement}>
        -
      </button>
      <p className="num">{count}</p>
      <button className="btn-add plus" onClick={() => setCount((c) => c + 1)}>
        +
      </button>
    </div>
  );
}
