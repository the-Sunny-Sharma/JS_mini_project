import { DisCard } from "../components/DisCard";
import "../styles/carddisplay.css";
import { useState, useEffect } from "react";
import axios from "axios";
export default function HCards() {
  const [data, setData] = useState([]);

  useEffect(() => {
    let url = "http://localhost:9000/getProdData";
    axios.get(url)
    .then(res => setData(res.data))
    .catch(err => alert("Issue: "+err));
  },[]);
  return (
    <>
     
    {/* <div className="cards"> */}
    <p>New Arrivals</p>
      <div className="col card-grid">
        {data.map((e) => (
          <DisCard  imgSrc={e.imgLink} 
          imgAlt= "Image"
          title = {e.productname}
          qty={e.perQty +" "+ e.perQtyUnit}
          amt = {"₹ " + e.amt}
          />
        ))}
        <DisCard
          imgSrc="https://d1sl07a7h3d3fr.cloudfront.net/common/master/farmeros_78.jpg"
          imgAlt="Card Image 1"
          title="Tomato"
          qty="1 Kg"
          amt="&#8377; 20.00"
        />
        <DisCard
          imgSrc="https://d1sl07a7h3d3fr.cloudfront.net/common/master/farmeros_66.jpg"
          imgAlt="Card Image 2"
          title="Potato"
          qty="1 Kg"
          amt="&#8377; 65.00"
        />
        <DisCard
          imgSrc="https://d1sl07a7h3d3fr.cloudfront.net/common/master/farmeros_38.jpg"
          imgAlt="Card Image 3"
          title="Spinach"
          qty="250 gm Bunch"
          amt="&#8377; 20.00"
        />
        <DisCard
          imgSrc="https://d1sl07a7h3d3fr.cloudfront.net/common/master/farmeros_65.jpg"
          imgAlt="Card Image 4"
          title="Onion"
          qty="1 Kg"
          amt="&#8377; 75.00"
        />
      </div>
      <p>Best Deals</p>
      <div className="col card-grid">
        <DisCard
          imgSrc="https://d1sl07a7h3d3fr.cloudfront.net/common/master/farmeros_78.jpg"
          imgAlt="Card Image 1"
          title="Tomato"
          qty="1 Kg"
          amt="&#8377; 20.00"
        />
        <DisCard
          imgSrc="https://d1sl07a7h3d3fr.cloudfront.net/common/master/farmeros_66.jpg"
          imgAlt="Card Image 2"
          title="Potato"
          qty="1 Kg"
          amt="&#8377; 65.00"
        />
        <DisCard
          imgSrc="https://d1sl07a7h3d3fr.cloudfront.net/common/master/farmeros_38.jpg"
          imgAlt="Card Image 3"
          title="Spinach"
          qty="250 gm Bunch"
          amt="&#8377; 20.00"
        />
        <DisCard
          imgSrc="https://d1sl07a7h3d3fr.cloudfront.net/common/master/farmeros_65.jpg"
          imgAlt="Card Image 4"
          title="Onion"
          qty="1 Kg"
          amt="&#8377; 75.00"
        />
      </div>
      <p>Best Sellers</p>
      <div className="col card-grid">
        <DisCard
          imgSrc="https://d1sl07a7h3d3fr.cloudfront.net/common/master/farmeros_78.jpg"
          imgAlt="Card Image 1"
          title="Tomato"
          qty="1 Kg"
          amt="&#8377; 20.00"
        />
        <DisCard
          imgSrc="https://d1sl07a7h3d3fr.cloudfront.net/common/master/farmeros_66.jpg"
          imgAlt="Card Image 2"
          title="Potato"
          qty="1 Kg"
          amt="&#8377; 65.00"
        />
        <DisCard
          imgSrc="https://d1sl07a7h3d3fr.cloudfront.net/common/master/farmeros_38.jpg"
          imgAlt="Card Image 3"
          title="Spinach"
          qty="250 gm Bunch"
          amt="&#8377; 20.00"
        />
        <DisCard
          imgSrc="https://d1sl07a7h3d3fr.cloudfront.net/common/master/farmeros_65.jpg"
          imgAlt="Card Image 4"
          title="Onion"
          qty="1 Kg"
          amt="&#8377; 75.00"
        />
        
      </div>
    {/* </div> */}
    </>
  );
}
