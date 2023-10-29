import { Carder } from "../components/Card";
import Footer from "../components/Footer";
import "../styles/carddisplay.css";
import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/card.css";
import "../styles/adder.css";

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
            amt={e.amt}
            prodId={e.prodId}
            description={e.description}
            mobile={e.mobile}
            totPrice={e.amt}
            totQtyAdd={1}
          />
        ))} 
      </div>
      <Footer />
    </>
  );
}
