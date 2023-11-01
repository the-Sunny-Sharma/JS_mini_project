import "../styles/carditem.css";
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { CartCard } from "./CartCard";
import { useNavigate } from "react-router-dom"; 

export default function CardItem() {
  const [data, setData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  const [un, setUn] = useState("");
  useEffect(() => {
    let un = localStorage.getItem("un");
    if (un == null) navigate("/login");
    else setUn(un);
  }, []);

  useEffect(() => {
    let url = "http://localhost:9000/getProdToCart";
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
        // Calculate the total price here
        const totalPrice = res.data.reduce((acc, item) => acc + item.totPrice, 0);
        setTotalPrice(totalPrice);
      })
      .catch((err) => alert("Issue: " + err));
  }, []);

  const checkout = () => {
    localStorage.setItem('NoItems', data.length);
    localStorage.setItem('TotalBill', totalPrice);
    navigate("/checkpay");
  }

  const delProdFromCart = (prodId) => {
    let url = "http://localhost:9000/delProdFromCart";
    let d = { data: { prodId } };
    axios
      .delete(url, d)
      .then((res) => {
        alert("Removed from Cart.");
        window.location.reload();
      })
      .catch((err) => alert("Issue: " + err));
  };

  return (
    <>
      <div className="checkout-card-wapper">
        <div class="container-fluid">
          {data.map((e) => (
            <div class="row" key={e.prodId}>
              <div class="col-12 mt-3">
                <div class="card card-width">
                  <CartCard
                    prodId={e.prodId}
                    imgSrc={e.imgSrc}
                    title={e.title}
                    qty={e.qty}
                    amt={e.amt}
                    totQtyAdd={e.totQtyAdd}
                  />
                  <div class="card-footer">
                    <small class="text-muted">
                      <button
                        onClick={() => {
                          if (window.confirm("Remove from cart?"))
                            delProdFromCart(e.prodId);
                        }}
                      >
                        Remove
                      </button>
                    </small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 mt-3">
              <div class="card checkout-card">
                <div class="card-horizontal">
                  <div class="card-body">
                    <h4 class="card-title">Total</h4>
                    <p class="card-text">{data.length} Items</p>
                  </div>
                  <div class="card-body">
                    <h4 class="card-title">₹ {totalPrice.toFixed(2)}</h4>
                  </div>
                </div>

                <div class="card-footer">
                  <button class="checkout-btn" onClick={checkout}>Checkout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
