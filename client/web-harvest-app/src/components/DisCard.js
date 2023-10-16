import React from "react";
import "../styles/card.css";
import "../styles/buyCard.css";
import { Link } from "react-router-dom";

export const DisCard = ({ imgSrc, imgAlt, title, qty, amt }) => {
  return (
    <div className="card-container">
      {imgSrc && imgAlt && (
        <img src={imgSrc} alt={imgAlt} className="card-img" />
      )}
      <div className="card-info">
        {title && <h1 className="card-title">{title}</h1>}
        {qty && <p className="card-description">{qty}</p>}
        {amt && <p className="card-description">{amt}</p>}
        <Link to="/login" className="card-btn">
            Continue Shopping
          </Link>
      </div>
    </div>
  );
};
