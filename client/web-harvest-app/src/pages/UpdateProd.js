import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbarv2 from "../components/Navbarv2";

export default function UpdateProd() {
  const [un, setUn] = useState("");
  const loc = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    let un = localStorage.getItem("un");
    if (un == null) navigate("/login");
    else setUn(un);
  }, []);

  const rAmt = useRef();

  const [prodId, setProdId] = useState("");

  useEffect(() => {
    setProdId(loc.state.prodId);
    setProductName(loc.state.productname);
    setDescription(loc.state.description);
    setMobile(loc.state.mobile);
    setAmt(loc.state.amt);
    setPerQty(loc.state.perQty);
    setPerQtyUnit(loc.state.perQtyUnit);
    setTotQty(loc.state.totQty);
    setTotQtyUnit(loc.state.totQtyUnit);
    setImgLink(loc.state.imgLink);
  }, []);

  const [productname, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [mobile, setMobile] = useState("");
  const [amt, setAmt] = useState("");
  const [perQty, setPerQty] = useState("");
  const [perQtyUnit, setPerQtyUnit] = useState("");
  const [totQty, setTotQty] = useState("");
  const [totQtyUnit, setTotQtyUnit] = useState("");
  const [imgLink, setImgLink] = useState("");
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

  const updateProd = (event) => {
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
    let url = "http://localhost:9000/modifyProdInfo";
    axios
      .put(url, prodData)
      .then((res) => {
        alert("Product info updated successfully!");
        navigate("/manageprod");
      })
      .catch((err) => setMsg("Issue: " + err));
  };

  const clear = (event) => {
    event.preventDefault();
    setDescription("");
    setMobile("");
    setAmt("");
    setPerQty("");
    setPerQtyUnit("");
    setTotQty("");
    setTotQtyUnit("");
    setImgLink("");
    clearSelectedImage();
    rAmt.current.focus();
    return;
  };

  return (
    <>
      <Navbarv2 />
      <div className="add-prod-container main-add-pr">
        <h2 className="title-add">Update product</h2>
        <div className="add-pr-form ">
          <form onSubmit={updateProd}>
          <div className="row-add">
              <label>Product ID: </label>
              <input
                type="text"
                onChange={hProdId}
                value={prodId}
                disabled={true}
              />
            </div>
            <div className="row-add">
              <label>Enter product name: </label>
              <input
                type="text"
                onChange={hProductName}
                value={productname}
                disabled={true}
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
              ></textarea>
            </div>
            <div className="row-add">
              <label>Mobile: </label>
              <input
                type="number"
                placeholder="1234567890"
                onChange={hMobile}
                value={mobile}
              />
            </div>
            <div>
              <label  className="row-add">Amount: (in Rs.)</label>
              <input
                type="number"
                step="any"
                placeholder="30.50"
                onChange={hAmt}
                value={amt}
                ref={rAmt}
              />
            </div>
            <div className="row-add">
              <label>Per Quantity: </label>
              <input
                type="number"
                placeholder="1"
                onChange={hPerQty}
                value={perQty}
              />
            </div>
            <div className="row-add">
              <label>Per Quantity Unit: </label>
              <input
                type="text"
                placeholder="Kg"
                onChange={hPerQtyUnit}
                value={perQtyUnit}
              />
            </div>
            <div className="row-add">
              <label >Total Quantity Available: </label>
              <input
                type="number"
                placeholder="1000"
                onChange={hTotQty}
                value={totQty}
              />
            </div>
            <div className="row-add">
              <label>Total Quantity Unit: </label>
              <input
                type="text"
                placeholder="Kg"
                onChange={hTotQtyUnit}
                value={totQtyUnit}
              />
            </div>
            <div className="row-add">
              <label>Image Link: </label>
              <input
                type="text"
                placeholder="Ex. https://abc.com/potato"
                onChange={hImgLink}
                value={imgLink}
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
            <div className="btn-add-pr">
              <input className="save-add-pr" type="submit" value="Update Details" />
            </div>
            <div className="btn-add-pr">
            <button className="btn-add-pr clr-add-pr" onClick={clear}>Clear All</button>
            </div>
            <p>{msg}</p>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
