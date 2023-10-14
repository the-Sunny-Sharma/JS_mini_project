import { Carder } from "../components/Card";
import Footer from "../components/Footer";
import "../styles/carddisplay.css";
export default function BuyCards() {
  return (
    <>
    <div className="cards">
      <div className="col card-grid">
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
        />
      </div>
    </div>
    <Footer/>
</>
  );
}