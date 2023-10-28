// import Navbar from "../components/Navbar";
import "../styles/hostpr.css";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import axios from "axios";
import Navbarv2 from "../components/Navbarv2";

export default function HostPr() {
  const [un, setUn] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    let un = localStorage.getItem("un");
    if (un == null) navigate("/login");
    else setUn(un);
  }, []);

  const rProductName = useRef();

  const [prodId, setProdId] = useState("");
  const [productname, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [mobile, setMobile] = useState("");
  const [amt, setAmt] = useState("");
  const [perQty, setPerQty] = useState("");
  const [perQtyUnit, setPerQtyUnit] = useState("");
  const [totQty, setTotQty] = useState("");
  const [totQtyUnit, setTotQtyUnit] = useState("");
  const [imgLink, setImgLink ] = useState("");
  const [msg, setMsg] = useState("");

  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState("");

  const hProdId = (event) => {
    setProdId(event.target.value);
  };
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
  const hImgLink = (event) => {
    setImgLink(event.target.value);
  }

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

  const saveProdInfo = (event) => {
    event.preventDefault();
    let prodData = {
      un,
      prodId,
      productname,
      description,
      mobile,
      amt,
      perQty,
      perQtyUnit,
      totQty,
      totQtyUnit,
      imgLink,
    };
    let url = "http://localhost:9000/saveProdInfo";
    axios
      .post(url, prodData)
      .then((res) => {
        setMsg("Product added successfully!");
        setProdId("");
        setProductName("");
        setDescription("");
        setMobile("");
        setAmt("");
        setPerQty("");
        setPerQtyUnit("");
        setTotQty("");
        setTotQtyUnit("");
        setImgLink("");
        clearSelectedImage();
      })
      .catch((err) => setMsg("Issue: " + err));
  };

  const clear = (event) => {
    event.preventDefault();
    setProdId("");
    setProductName("");
    setDescription("");
    setMobile("");
    setAmt("");
    setPerQty("");
    setPerQtyUnit("");
    setTotQty("");
    setTotQtyUnit("");
    setImgLink("");
    clearSelectedImage();
    rProductName.current.focus();
    return;
  };

  return (
    <>
      <Navbarv2 />
      <div className="add-prod-container main-add-pr">
        <p className="title-add ">Add a new product- {un}</p>
        <div className="add-pr-form ">
          <form onSubmit={saveProdInfo}>
          <div className="row-add">
              <label>Create a Product Id: </label>
              <input
                type="text"
                placeholder="Ex. B12"
                onChange={hProdId}
                value={prodId}
                required
              />
            </div>
            <div className="row-add">
              <label>Enter product name: </label>
              <input
                type="text"
                placeholder="Ex. Tomato"
                onChange={hProductName}
                value={productname}
                ref={rProductName}
                required
              />
            </div>
            <div className="row-add">
              <div>
                <label>Description: </label>
              </div>
              <textarea
              className="textarea-add"
                placeholder="Ex. Fresh Tomatos from Bhanjanlal Farms Pvt. Ltd."
                onChange={hDescription}
                value={description}
                rows={5}
                cols={40}
              ></textarea>
            </div>
            <div className="row-add">
              <label>Mobile: </label>
              <input
                type="number"
                placeholder="1234567890"
                onChange={hMobile}
                value={mobile}
                required
              />
            </div>
            <div>
              <label className="row-add">Amount: (in Rs.)</label>
              <input
                type="number"
                step="any"
                placeholder="30.50"
                onChange={hAmt}
                value={amt}
                required
              />
            </div>
            <div className="row-add">
              <label>Per Quantity: </label>
              <input
                type="number"
                placeholder="1"
                onChange={hPerQty}
                value={perQty}
                required
              />
            </div>
            <div className="row-add">
              <label>Per Quantity Unit: </label>
              <input
                type="text"
                placeholder="Kg"
                onChange={hPerQtyUnit}
                value={perQtyUnit}
                required
              />
            </div>
            <div className="row-add">
              <label>Total Quantity Available: </label>
              <input
                type="number"
                placeholder="1000"
                onChange={hTotQty}
                value={totQty}
                required
              />
            </div>
            <div className="row-add">
              <label>Total Quantity Unit: </label>
              <input
                type="text"
                placeholder="Kg"
                onChange={hTotQtyUnit}
                value={totQtyUnit}
                required
              />
            </div>
            <div className="row-add">
              <label>Link of Image: </label>
              <input
                type="text"
                placeholder="Ex. htps://unsplash.com/tomato"
                onChange={hImgLink}
                value={imgLink}
              />
            </div>
            <div className="row-add">
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
            <div className="center-btn">
            <div className="btn-add-pr">
              <input className="save-add-pr" type="submit" value="Add Product" />
            </div>
            <div className="btn-add-pr">
            <button className="btn-add-pr clr-add-pr" onClick={clear}>Clear All</button>
            </div>
            </div>
            <p>{msg}</p>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
