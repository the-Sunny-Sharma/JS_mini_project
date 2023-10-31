// import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/logout.css";
import Navbarv2 from "../components/Navbarv2";

export default function Logout() {
  const navigate = useNavigate();
  useEffect(() => {
    let un = localStorage.getItem("un");
    if (un == null) navigate("/login");
    else setUn(un);
  }, [navigate]);

  const [un, setUn] = useState("");
  const lo = (event) => {
    event.preventDefault();
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <Navbarv2 />
      <div className="user-out--container">
        <div className="l-form-logout">
          <h2 className="head-lo">Are you sure you want to logout?</h2>
          <p className="user-name">{un}</p>
          <button className="btn-yes" onClick={lo}>
            Yes
          </button>
          <Link className="home-a" to="/">
            No, take me to the home page.
          </Link>
        </div>
      </div>
    </>
  );
}