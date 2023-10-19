import Navbar from "../components/Navbar";
import "../styles/hostpr.css";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

export default function HostPr() {
  const [un, setUn] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    let un = localStorage.getItem("un");
    if (un == null) navigate("/login");
    else setUn(un);
  }, []);

  const rProductName = useRef();

  const [productname, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [mobile, setMobile] = useState("");
  const [amt, setAmt] = useState("");
  const [perQty, setPerQty] = useState("");
  const [perQtyUnit, setPerQtyUnit] = useState("");
  const [totQty, setTotQty] = useState("");
  const [totQtyUnit, setTotQtyUnit] = useState("");

  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState(null);

  const hProductName = (event) => {
    setProductName(event.target.value);
  };
  const hDescription = (event) => {
    setDescription(event.target.value);
  };
  const hMobile = (event) => {
    setMobile(event.target.value);
  };
  const hAmt = (event) => {
    setAmt(event.target.value);
  };
  const hPerQty = (event) => {
    setPerQty(event.target.value);
  };
  const hPerQtyUnit = (event) => {
    setPerQtyUnit(event.target.value);
  };
  const hTotQty = (event) => {
    setTotQty(event.target.value);
  };
  const hTotQtyUnit = (event) => {
    setTotQtyUnit(event.target.value);
  };

  const handleChange = (e) => {
    if (e.target.files.length > 0) {
      setSelectedFile(URL.createObjectURL(e.target.files[0]));
      setSelectedFileName(e.target.files[0].name);
    } else {
      setSelectedFile(null);
      setSelectedFileName(null);
    }
  };

  const clearSelectedImage = () => {
    setSelectedFile(null);
    setSelectedFileName(null);
  };

  const clear = (event) => {
    event.preventDefault();
    setProductName("");
    setDescription("");
    setMobile("");
    setAmt("");
    setPerQty("");
    setPerQtyUnit("");
    setTotQty("");
    setTotQtyUnit("");
    clearSelectedImage();
  };

  return (
    <>
      <Navbar />
      <div className="full-page">
      <div className="h2"><h2>Add a New Product- {un}</h2></div>
    
      <form className="main-form">
        <div>
          <label className="p-name">Enter product name: </label>
          <div className="name-ex">
          <input 
            type="text"
            placeholder="Ex. Ram Sharma"
            onChange={hProductName}
            value={productname}
            ref={rProductName}
          /></div>
        </div>
        <div className="f-des">
          <div className="des">
            <label className="des-in">Description: </label>
          </div>
          <textarea className="main-d"
            placeholder="Ex. Fresh Tomatos from Bhanjanlal Farms Pvt. Ltd."
            onChange={hDescription}
            value={description}
          ></textarea>
        </div>
        <div>
          <label>Mobile: </label>
          <input
            type="number"
            placeholder="1234567890"
            onChange={hMobile}
            value={mobile}
          />
        </div>
        <div>
          <label>Amount: (in Rs.)</label>
          <input
            type="number"
            step="any"
            placeholder="30.50"
            onChange={hAmt}
            value={amt}
          />
        </div>
        <div>
          <label>Per Quantity: </label>
          <input
            type="number"
            placeholder="1"
            onChange={hPerQty}
            value={perQty}
          />
        </div>
        <div>
          <label>Per Quantity Unit: </label>
          <input
            type="text"
            placeholder="Kg"
            onChange={hPerQtyUnit}
            value={perQtyUnit}
          />
        </div>
        <div>
          <label>Total Quantity Available: </label>
          <input
            type="number"
            placeholder="1000"
            onChange={hTotQty}
            value={totQty}
          />
        </div>
        <div>
          <label>Total Quantity Unit: </label>
          <input
            type="text"
            placeholder="Kg"
            onChange={hTotQtyUnit}
            value={totQtyUnit}
          />
        </div>
        <div>
          <label>
            Your Image File:
            <input type="file" onChange={handleChange} />
          </label>
          {selectedFile && (
            <div>
              <img src={selectedFile} alt="Selected" width="250px" />
            </div>
          )}
          {selectedFileName && <p>Selected File: {selectedFileName}</p>}
        </div>
        <div>
          <input type="submit" value="Add Product" />
        </div>
        <button onClick={clear}>Clear All</button>
      </form>
      </div>
      <Footer />
    </>
  );
}
