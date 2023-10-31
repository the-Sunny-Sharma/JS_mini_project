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

  // const addProdToCart = (event) => {
  //   event.preventDefault();
  //   let prodData = {
  //     productname,
  //     description,
  //     mobile,
  //     amt,
  //     perQty,
  //     perQtyUnit,
  //     imgLink,
  //   };
  //   let url = "http://localhost:9000/addProdToCart";
  //   axios
  //     .post(url, prodData)
  //     .then((res) => {
  //       alert("Product added successfully!");
        
  //     })
  //     .catch((err) => setMsg("Issue: " + err));
  // };
  

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
