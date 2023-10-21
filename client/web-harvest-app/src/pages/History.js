// import Navbar from '../components/Navbar';
import { useState, useEffect } from "react";
import '../styles/history.css';
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbarv2 from "../components/Navbarv2";

export default function History() {
  const navigate = useNavigate();
  useEffect(() => {
    let un = localStorage.getItem("un");
    if (un == null) navigate("/login");
    else setUn(un);
  }, []);

  const [un, setUn] = useState("");

  return (
    <>
      <Navbarv2 />
      <div className="trans-hist-wrapper">
        <h3 className="heading">Transaction History</h3>
        <p>{un}</p>
      </div>
      <Footer />
    </>
  );
}
