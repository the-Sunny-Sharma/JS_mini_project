import "../styles/carditem.css";
import "../styles/carditemco.css";
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { CartCard } from "./CartCard";
import { useNavigate } from "react-router-dom"; 

export default function CardItemCO() {
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


  return (
    <>
      <div className="checkout-card-wapper co-summary">
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
                  
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </>
  );
}
