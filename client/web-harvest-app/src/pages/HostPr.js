import Navbar from "../components/Navbar";
import "../styles/hostpr.css";
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function HostPr() {
    const [un, setUn] = useState('');
        const navigate = useNavigate();
        useEffect(() => {
            let un = localStorage.getItem("un");
            if(un == null)
                navigate("/login");
            else
                setUn(un);
            },[]);

  return (
    <>
      <Navbar />
      <h2>Add a new product- {un}</h2>
      <form>
        <div>
          <label>Enter product name:  </label>
          <input type="text" />
        </div>
        <div>
          <label>Description: </label>
          <textarea rows="5" cols="20" placeholder="Type here..." />
        </div>
        <div>
          <label>Mobile: </label>
          <input type="text" />
        </div>
        <div>
          <label>Amount: </label>
          <input type="text" />
        </div>
        <div>
          <label>Per Quantity: </label>
          <input type="text" />
        </div>
        <div>
          <label>Total Quantity: </label>
          <input type="text" />
        </div>
        <div>
          <label>
            Your Image File:
            <input type="file" name="myImage" accept="image/png, image/jpeg" />
          </label>
        </div>
        <div>
            <input type="submit" value="Add Product"/>
        </div>
      </form>
    </>
  );
}
