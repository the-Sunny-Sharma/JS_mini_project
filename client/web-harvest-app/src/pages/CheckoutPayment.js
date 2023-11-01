import NavbarCheckout from "../components/NavbarCheckout";
import { useNavigate } from "react-router-dom";
import '../styles/carditemco.css';
import { useState } from "react";

export default function CheckoutPayment() {
  const navigate = useNavigate();
    // Initialize a state variable to hold the selected value
    const [payMode, setPayMode] = useState("cash"); // Default selection

    // Handle changes in the radio button selection
    const hPayMode = (event) => {
      setPayMode(event.target.value);
    };
  return (
    <>
      <NavbarCheckout />
      <div className="checkout-card-wapper co-summary">
        <div class="container-fluid ">
          <div class="row payMode">
            <div class="col-12 mt-3">
              <div class="card card-width">
              <label className="co-label">
            <input
              type="radio"
              value="cash"
              checked={payMode === "cash"}
              onChange={hPayMode}
            />
            Cash On Delhivery
          </label>
              </div>
            </div>
          </div>
        </div>
        
<div class="container-fluid payMode">
          <div class="row">
            <div class="col-12 mt-3">
              <div class="card card-width">
              <label className="co-label">
            <input
              type="radio"
              value="onlinePay"
              checked={payMode === "onlinePay"}
              onChange={hPayMode}
            />
            Pay Online
          </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
      className="checkout-btn payBtn"
        onClick={() => {
          navigate("/checkout");
        }}
      >
        PAY
      </button>
    </>
  );
}

