import "../styles/carditem.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";
import { CartCard } from "./CartCard";

export default function CardItem() {
  const [data, setData] = useState([]);

  useEffect(() => {
    let url = "http://localhost:9000/getProdToCart";
    axios
      .get(url)
      .then((res) => setData(res.data))
      .catch((err) => alert("Issue: " + err));
  }, []);
  return (
    <>
      <div className="checkout-card-wapper">
        <div class="container-fluid">
        {data.map((e) => (
          <div class="row">
            <div class="col-12 mt-3">
              <div class="card card-width">
                
                  <CartCard
                    imgSrc={e.imgSrc}
                    title={e.title}
                    qty={e.qty }
                    amt={ e.amt}
                  />
                <div class="card-footer">
                  <small class="text-muted">
                    <button>Remove</button>
                  </small>
                </div>
              </div>
            </div>
          </div>
                          ))}
        </div>
        
        {/* <div class="container-fluid">
          <div class="row">
            <div class="col-12 mt-3">
              <div class="card card-width">
                <div class="card-horizontal">
                  <div class="img-square-wrapper">
                    <img
                      class=""
                      src="http://via.placeholder.com/300x180"
                      alt="Card image cap"
                    />
                  </div>
                  <div class="card-body card-center">
                    <h4 class="card-title">Tomato</h4>
                    <p class="card-text">1 Kg</p>
                  </div>
                  <div class="card-body card-center">
                    <h4 class="card-title">₹ 40.00</h4>
                    <p class="card-text">Total Quantity: 5</p>
                  </div>
                  <div class="card-body card-center">
                    <h4 class="card-title">₹ 200.00</h4>
                    <p class="card-text"></p>
                  </div>
                </div>
                <div class="card-footer">
                  <small class="text-muted">
                    <button>Remove</button>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 mt-3">
              <div class="card checkout-card">
                <div class="card-horizontal">
                  <div class="card-body">
                    <h4 class="card-title">Total</h4>
                    <p class="card-text ">5 Items</p>
                  </div>
                  <div class="card-body">
                    <h4 class="card-title">₹ 400.00</h4>
                  </div>
                </div>

                <div class="card-footer">
                  <button class="checkout-btn">Checkout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
