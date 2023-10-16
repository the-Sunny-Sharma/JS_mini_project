import Navbar from "../components/Navbar";

import "../styles/ManageProduct.css";

import Footer from "../components/Footer";
import axios from "axios";
import { useEffect, useState } from "react";

export default function ManageProduct() {
  const [data, setData] = useState([]);

  useEffect(() => {
    let url = "http://localhost:9000/getProdData";
    axios.get(url)
    .then(res => setData(res.data))
    .catch(err => alert("Issue: "+err));
  },[]);

  const delProd = (productname) => {
    let url = "http://localhost:9000/rmProdData";
    let d = {data : {productname}};
    axios.delete(url, d)
    .then(res => {
      alert("Product Deleted!");
      window.location.reload();
    })
    .catch(err => alert("Issue: " + err));
  }
  return (
    <>
      <Navbar />

      <div className="main-manage">
        <div className="h1">
          <h1>Manage Your Products from here.</h1>
        </div>
        <table border="5" className="main-table" style={{ width: "50%" }}>
          <thead>
            <tr>
              <th>SR-NO.</th>
              <th>product-name</th>
              <th>Price</th>
              <th>Segment.</th>
              <th>Unit</th>
              <th>Total-Qty.</th>
              <th>Unit</th>
              <th>Update</th>
              <th>delete</th>
            </tr>
          </thead>
         <tbody>
        
            {
              data.map((e) => (
                <tr style={{"textAlign":"center"}}>
                  <td>{e.mobile}</td>
                  <td>{e.productname}</td>
                  <td>{e.amt}</td>
                  <td>{e.perQty}</td>
                  <td>{e.perQtyUnit}</td>
                  <td>{e.totQty}</td>
                  <td>{e.totQtyUnit}</td>
                  <td>
                <button>Update</button>
              </td>
              <td>
                <button onClick={() => {
                  if(window.confirm('Are you sure to delete this product?')) delProd(e.productname);
                }}>Delete</button>
              </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>

      <Footer />
    </>
  );
}
