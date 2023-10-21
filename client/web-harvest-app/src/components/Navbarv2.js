import { Link } from "react-router-dom";
import "../styles/navbar2.css";
import CartCount from "./CartCount";

function Navbarv2() {
  const un = localStorage.getItem("un");
  const ctg = localStorage.getItem("ctg");
  return (
    <>
      <div className="split nav-line">
        <div className="split left logo-left"></div>
        <div className="split mid">
          <h1 className="title">WebHarvest - Local Farmer's Online Market</h1>
        </div>
        {ctg !== "farmer" && (
          <button className="split right cart-btn">
            <Link to="/cart" className="svg-cart anchor-cart">
              <svg
                className="svg-cart"
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                class="bi bi-cart"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
            </Link>
            <p className="yellow-cart-num">45</p>
          </button>
        )}
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
      <div className="nav-line-a split">
        <div className="center-nav-a">
          <ul>
            {ctg !== "farmer" && (
              <li>
                <Link to="/" className="link">
                  Home
                </Link>
              </li>
            )}
            {ctg !== "farmer" && (
              <li>
                <Link to="/products" className="link">
                  Buy Products
                </Link>
              </li>
            )}
            {ctg !== "farmer" && (
              <li>
                <Link to="/history" className="link">
                  Order History
                </Link>
              </li>
            )}
            {un !== null && ctg === "farmer" && (
              <li>
                <Link to="/dashboard" className="link">
                  Dashboard
                </Link>
              </li>
            )}
            {un !== null && ctg === "farmer" && (
              <li>
                  <Link to="/yourproduct" className="link">
                    Add Product
                  </Link>
                  </li>
                )}
            
            {un !== null && ctg === "farmer" && (
              <li>
                  <Link to="/manageprod" className="link">
                    Manage Product
                  </Link>
                  </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbarv2;
