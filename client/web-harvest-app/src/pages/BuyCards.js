import { Carder } from "../components/Card";
import Footer from "../components/Footer";
import "../styles/carddisplay.css";
import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/card.css";
import "../styles/adder.css";
// import AddToCart from "./AddToCart";

export default function BuyCards() {
  const [data, setData] = useState([]);

  useEffect(() => {
    let url = "http://localhost:9000/getProdData";
    axios
      .get(url)
      .then((res) => setData(res.data))
      .catch((err) => alert("Issue: " + err));
  }, []);

  return (
    <>
      <div className="col card-grid">
         {data.map((e) => (
          <Carder
            imgSrc={e.imgLink}
            imgAlt="Image"
            title={e.productname}
            qty={e.perQty + " " + e.perQtyUnit}
            amt={"₹ " + e.amt}
          />
        ))} 
        
{/* 
        <Carder
          imgSrc="https://d1sl07a7h3d3fr.cloudfront.net/common/master/farmeros_78.jpg"
          imgAlt="Card Image 1"
          title="Tomato"
          qty="1 Kg"
          amt="&#8377; 20.00"
        />
        <Carder
          imgSrc="https://d1sl07a7h3d3fr.cloudfront.net/common/master/farmeros_66.jpg"
          imgAlt="Card Image 2"
          title="Potato"
          qty="1 Kg"
          amt="&#8377; 65.00"
        />
        <Carder
          imgSrc="https://d1sl07a7h3d3fr.cloudfront.net/common/master/farmeros_38.jpg"
          imgAlt="Card Image 3"
          title="Spinach"
          qty="250 gm Bunch"
          amt="&#8377; 20.00"
        />
        <Carder
          imgSrc="https://d1sl07a7h3d3fr.cloudfront.net/common/master/farmeros_65.jpg"
          imgAlt="Card Image 4"
          title="Onion"
          qty="1 Kg"
          amt="&#8377; 75.00"
        /> */}
      </div>
      <Footer />
    </>
  );
}
