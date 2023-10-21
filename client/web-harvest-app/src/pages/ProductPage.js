import { useState, useEffect } from "react";
import axios from "axios";
import Navbarv2 from "../components/Navbarv2";
import Footer from "../components/Footer";
export default function HCards() {
  const [data, setData] = useState([]);

  useEffect(() => {
    let url = "http://localhost:9000/getProdData";
    axios.get(url)
    .then(res => setData(res.data))
    .catch(err => alert("Issue: "+err));
  },[]);
  return(
    <>
        <Navbarv2 />
        <div>
        
        </div>
        <Footer />
    </>
  );
}