import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/ManageProduct.css";
import Footer from "../components/Footer";

export default function UpdateProd() {
    const [un, setUn] = useState("");
    const loc = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
      let un = localStorage.getItem("un");
      if (un == null) navigate("/login");
      else setUn(un);
    }, []);
  
    const rProductName = useRef();

    
    useEffect( () => {
        setProductName(loc.state.productname);
        setDescription(loc.state.description);
        setMobile(loc.state.mobile);
        setAmt(loc.state.amt);
        setPerQty(loc.state.perQty);
        setPerQtyUnit(loc.state.perQtyUnit);
        setTotQty(loc.state.totQty);
        setTotQtyUnit(loc.state.totQtyUnit);
    },[]);
     
    const [productname, setProductName] = useState("");
    const [description, setDescription] = useState("");
    const [mobile, setMobile] = useState("");
    const [amt, setAmt] = useState("");
    const [perQty, setPerQty] = useState("");
    const [perQtyUnit, setPerQtyUnit] = useState("");
    const [totQty, setTotQty] = useState("");
    const [totQtyUnit, setTotQtyUnit] = useState("");
    const [msg, setMsg] = useState("");
  
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedFileName, setSelectedFileName] = useState("");
  
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
  
    const updateProd = (event) => {
      event.preventDefault();
      let prodData = {
        productname,
        description,
        mobile,
        amt,
        perQty,
        perQtyUnit,
        totQty,
        totQtyUnit,
      };
      let url = "http://localhost:9000/modifyProdInfo";
      axios.put(url, prodData)
      .then((res) => {
        alert("Product info updated successfully!");
        navigate("/manageprod");
      })
      .catch(err => setMsg("Issue: " + err));
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
      rProductName.current.focus();
      return;
    };
  
    return (
      <>
        <Navbar />
        <h2>Update product</h2>
        <form onSubmit={updateProd}>
          <div>
            <label>Enter product name: </label>
            <input
              type="text"
              placeholder="Ex. Tomato"
              onChange={hProductName}
              value={productname}
              ref={rProductName}
              disabled={true}
            />
          </div>
          <div>
            <div>
              <label>Description: </label>
            </div>
            <textarea
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
            <input type="submit" value="Update Details" />
          </div>
          <button onClick={clear}>Clear All</button>
          <p>{msg}</p>
        </form>
        <Footer />
      </>
    );
  }
  