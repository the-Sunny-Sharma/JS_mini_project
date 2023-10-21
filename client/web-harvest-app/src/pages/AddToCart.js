import CardItem from "../components/CartItem";
import Navbarv2 from "../components/Navbarv2";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import '../styles/addtocart.css';
import Footer from '../components/Footer';

export default function AddToCart() {
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
        <div className="card-section">
            <CardItem />
        </div>
        <Footer />
        </>
    );
}