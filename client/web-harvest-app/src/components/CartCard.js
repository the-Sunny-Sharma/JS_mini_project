import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const CartCard = ({ imgSrc, title, qty, amt }) => {
  const navigate = useNavigate();

  return (
    <div class="card-horizontal">
                <div class="img-square-wrapper">
                {imgSrc && (
                  <img
                    src={imgSrc}
                    alt="Card image cap"
                    height='150'
                    width='150'
                  />
                  )}
                </div>
                <div class="card-body card-center">
                {title && 
                  <h4 class="card-title">{title}</h4>
                }
                {qty && 
                  <p class="card-text">{qty}</p>
                }
                </div>
                <div class="card-body card-center">
                {amt && 
                  <h4 class="card-title">{amt}</h4>
                }
                  <p class="card-text">Total Quantity: xx</p>
                </div>
                <div class="card-body card-center">
                  <h4 class="card-title">₹ 200.00</h4>
                  <p class="card-text"></p>
                </div>
              </div>
  );
};
