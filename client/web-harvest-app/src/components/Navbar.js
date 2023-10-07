import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  const un = localStorage.getItem("un");
  const ctg = localStorage.getItem("ctg");
  return (
    <>
      <div className="nav-bar">
        <Link to="/">
          <div className="logo"></div>
        </Link>
        <div className="center-nav">
          <h1 className="title">WebHarvest - Local Farmer's Online Market</h1>
          <div className="nav-cont">
            <ul>
              {/* user homepage*/}
              <li>
                {ctg !== "farmer" && (
                  <Link to="/home" className="link">
                    Home
                  </Link>
                )}
              </li> 
              {/* farmer dashboard*/}
              <li>
                {un !== null && ctg === "farmer" && (
                  <Link to="/dashboard" className="link">
                    Dashboard
                  </Link>
                )}
              </li>
                {/* user- buyproduct */}
              <li>
                {un != null && ctg === "customer" && (
                  <Link to="/products" className="link">
                    Buy Products
                  </Link>
                )}
              </li>
              {/* user- orderHistory */}
              <li>
                {un != null && ctg === "customer" && (
                  <Link to="/history" className="link">
                    Order History
                  </Link>
                )}
              </li>
              {/* farmer- addProduct */}
              <li>
                {un !== null && ctg === "farmer" && (
                  <Link to="/yourproduct" className="link">
                    Add Product
                  </Link>
                )}
              </li>
              {/* common- setting  */}
              <li>
                <Link to="/settings" className="link">
                  Settings
                </Link>
              </li>
              {/* common- login  */}
              <li>
                {un == null && (
                  <Link to="/login" className="link">
                    Login
                  </Link>
                )}
              </li>
              {/* common- signup */}
              <li>
                {un == null && (
                  <Link to="/signup" className="link">
                    Sign Up
                  </Link>
                )}
              </li>
              {/* common- logout */}
              <li>
                {un != null && (
                  <Link to="/logout" className="link">
                    Logout
                  </Link>
                )}
              </li>
              {/* common- changepassword  */}
              <li>
                {un != null && (
                  <Link to="/changepass" className="link">
                    ChangePassword
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
        <Link to="/cart">
          <div className="cart-svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-cart"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Navbar;
