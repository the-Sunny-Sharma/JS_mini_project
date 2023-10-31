import { Link } from "react-router-dom";
import "../styles/navbar2.css";
import "../styles/navCO.css";
import { useState, useEffect } from "react";
import axios from "axios";

function NavbarCheckout() {
  const un = localStorage.getItem("un");
  const [data, setData] = useState([]);

  useEffect(() => {
    let url = "http://localhost:9000/getProdToCart";
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => alert("Issue: " + err));
  }, []);
  return (
    <>
      <div className="split nav-line">
        <div className="split left logo-left"></div>
        <div className="split mid">
          <h1 className="title">WebHarvest - Local Farmer's Online Market</h1>
        </div>
        {un != null && (
          <Link to="/profile" className="split right username-nav">
            <p className="user-display"> Welcome, {un}</p>
          </Link>
        )}
        <button className="login-new split right">
          {un == null && (
            <>
              <img
                className="img-login"
                src="https://www.jiomart.com/assets/ds2web/jds-icons/user-icon.svg"
                alt="login"
              />
              <Link to="/login" className="btn-login-nav link-nav-login">
                Login
              </Link>
            </>
          )}
          {un != null && (
            <Link to="/logout" className="link">
              Logout
            </Link>
          )}
        </button>
      </div>
      <div className="nav-checkout-status">
        <div className="co-split-left co-inline">
          <p className="circle-num ">&#9312;</p>
          <p className="co-p ">Address</p>
        </div>
        <div className="co-split-mid co-inline ">
          <p className="circle-num ">&#9313;</p>
          <p className="co-p">Order Summary</p>
        </div>
        <div className="co-split-right co-inline ">
          <p className="circle-num ">&#9314;</p>
          <p className="co-p ">Payment</p>
        </div>
      </div>
    </>
  );
}

export default NavbarCheckout;
