import Navbarv2 from "../components/Navbarv2";
import { useState, useEffect } from "react";
import BuyCards from "./BuyCards";
import { useNavigate } from "react-router-dom";
import '../styles/product.css';

export default function Products() {
  const navigate = useNavigate();
  const [un, setUn] = useState("");

  useEffect(() => {
    let un = localStorage.getItem("un");
    if (un == null) navigate("/login");
    else setUn(un);
  }, []);

  return (
    <>
      <Navbarv2/>
      <div className="prod-main-wrapper">
        <p className="prod-title">Buy Fresh. Stay healthy.</p>
        <BuyCards/>
      </div>
    </>
  );
}
