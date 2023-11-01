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
    <p><div className="newarr">New Arrivals</div></p>
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
      <p><div className="bestdeal">Best Deals</div></p>
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
        <DisCard
          imgSrc="https://oloja.ng/wp-content/uploads/2019/02/fresh-green-peas-e1550614970780.jpeg"
          imgAlt="Card Image 5"
          title="peas"
          qty="1 Kg"
          amt="&#8377; 50.00"
        />
        <DisCard
          imgSrc="https://promisedlandproduce.com.au/cdn/shop/products/Eggplant_249265921.jpg?v=1605724629"
          imgAlt="Card Image 6"
          title="Eggplant"
          qty="1 Kg"
          amt="&#8377; 40.00"
        />
        <DisCard
          imgSrc="https://resources.commerceup.io/?key=https%3A%2F%2Fprod-admin-images.s3.ap-south-1.amazonaws.com%2FHNkYh5vI57IbukL4twUA%2Fproduct%2FBroccoli.jpg&width=800&resourceKey=HNkYh5vI57IbukL4twUA"
          imgAlt="Card Image 7"
          title="Broccoli"
          qty="1 Kg"
          amt="&#8377; 70.00"
        />
        <DisCard
          imgSrc="https://subzfresh.com/wp-content/uploads/2022/04/Baby-carrot.jpg"
          imgAlt="Card Image 8"
          title="Carrots"
          qty="1 Kg"
          amt="&#8377; 60.00"
        />
      </div>
      <p><div className="bestseller">Best Sellers</div></p>
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
          imgSrc="https://www.ritasfarm.com.au/cdn/shop/products/5-PurpleSweetPotato_1200x1200.jpg?v=1627369458"
          imgAlt="Card Image 3"
          title="Sweet Potatoes"
          qty="250 gm Bunch"
          amt="&#8377; 20.00"
        />
        <DisCard
          imgSrc="https://elmercadodelpueblo.com/wp-content/uploads/2021/05/green-beans-1.jpg"
          imgAlt="Card Image 4"
          title="Green Beans"
          qty="1 Kg"
          amt="&#8377; 75.00"
        />
        <DisCard
          imgSrc="https://www.harrisfarm.com.au/cdn/shop/products/PLU_-Cauliflower-Whole-Standard-1-Square-_1200x1200px_1024x1024.jpg?v=1660182796"
          imgAlt="Card Image 5"
          title="Cauliflower"
          qty="1 Kg"
          amt="&#8377; 40.00"
        />
        <DisCard
          imgSrc="https://www.martizo.com/wp-content/uploads/2017/12/Cucumber.jpg"
          imgAlt="Card Image 6"
          title="Cucumbers"
          qty="1 Kg"
          amt="&#8377; 70.00"
        />
        <DisCard
          imgSrc="https://www.freshaisle.com/cdn/shop/products/fresh-lettuce-iceberg-1-pc-500-850-gm-exotic-vegetables-239.jpg?v=1681625564"
          imgAlt="Card Image 7"
          title="Lettuce"
          qty="1 Kg"
          amt="&#8377; 50.00"
        />
        
      </div>
    {/* </div> */}
    </>
  );
}
