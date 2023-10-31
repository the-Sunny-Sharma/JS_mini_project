import Navbarv2 from "../components/Navbarv2";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import '../styles/addtocart.css';
import Footer from '../components/Footer';
import axios from "axios";
import CardItem from "../components/CartItem";

export default function AddToCart() {
    const navigate = useNavigate();
  useEffect(() => {
    let un = localStorage.getItem("un");
    if (un == null) navigate("/login");
    else setUn(un);
  }, []);

  const [un, setUn] = useState("");

  const [data, setData] = useState([]);

  useEffect(() => {
    let url = "http://localhost:9000/getProdToCart";
    axios
      .get(url)
      .then((res) => setData(res.data))
      .catch((err) => alert("Issue: " + err));
  }, []);
    
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