import React from "react";
import "../styles/card.css";
import "../styles/adder.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Carder = ({ imgSrc, imgAlt, title, qty, amt , prodId,description, mobile, totPrice, totQtyAdd}) => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const handleDecrement = () => {
    if (count > 0) {
      setCount((c) => c - 1);
      console.log("clicked", { title });
    }
  };

  const addProdToCart = () => {
    let addedProdData = {
      prodId,
      imgSrc,
      title,
      qty,
      amt,
      description,
      mobile,
      totQtyAdd,
      totPrice,
    };
    let url = "http://localhost:9000/addProdToCart";
    axios
      .post(url, addedProdData)
      .then((res) => {
        alert("Added to Cart");
        navigate("/products");
      })
      .catch((err) => alert("Issue: " + err));
  };

  return (
    <div className="card-container">
      
      {imgSrc && imgAlt && (
        <img src={imgSrc} alt={imgAlt} className="card-img" />
      )}
      <div className="card-info">
        {/* {prodId && <p>{prodId}</p>} */}
        {title && <h2 className="card-title">{title}</h2>}
        {qty && <p className="card-description">{qty}</p>}
        {amt && <p className="card-description">₹ {amt}</p>}
        <div className="container-add">
          <button
            className="btn-add minus"
            onClick={() => {
              handleDecrement();
            }}
          >
            -
          </button>
          <p className="num">{count}</p>
          <button
            className="btn-add plus"
            onClick={() => {
              setCount((c) => c + 1);
              addProdToCart();
              console.log("Added", { title });
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};
