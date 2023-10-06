import React from "react";
import "../styles/card.css";
import Adder from "./Adder";

export const Card = ({ imgSrc, imgAlt, title, qty, amt }) => {
  return (
    <div className="card-container">
      {imgSrc && imgAlt && (
        <img src={imgSrc} alt={imgAlt} className="card-img" />
      )}
      <div className="card-info">
        {title && <h1 className="card-title">{title}</h1>}
        {qty && <p className="card-description">{qty}</p>}
        {amt && <p className="card-description">{amt}</p>}
        <Adder />
      </div>
    </div>
  );
};
