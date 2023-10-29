import "../styles/ManageProduct.css";
import Footer from "../components/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbarv2 from "../components/Navbarv2";

export default function ManageProduct() {
  const [un, setUn] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    let un = localStorage.getItem("un");
    if (un == null) navigate("/login");
    else setUn(un);
    let url = "http://localhost:9000/getProdDataFarm";
    let username = { username : un};
    axios
      .get(url, {params: username})
      .then((res) => setData(res.data))
      .catch((err) => alert("Issue: " + err));
  }, []);

  const [data, setData] = useState([]);

  const nav = useNavigate();
  const updateProds = (
    prodId,
    productname,
    description,
    mobile,
    amt,
    perQty,
    perQtyUnit,
    totQty,
    totQtyUnit,
    imgLink
  ) => {
    nav("/updateprod", {
      state: {
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
      },
    });
  };

  const delProd = (prodId) => {
    let url = "http://localhost:9000/rmProdData";
    let d = { data: { prodId } };
    axios
      .delete(url, d)
      .then((res) => {
        alert("Product Deleted!");
        window.location.reload();
      })
      .catch((err) => alert("Issue: " + err));
  };
  return (
    <>
      <Navbarv2 />

      <div className="main-manage">
        <div className="h-div">
          <h3 className="h-tab">Manage Your Products from here.</h3>
        </div>
        <div className="table-cont">
          <table border="5" className="main-table" style={{ width: "50%" }}>
            <thead>
              <tr>
                <th>Product ID</th>
                <th>Image</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Segment</th>
                <th>Unit</th>
                <th>Total Quantity</th>
                <th>Unit</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {data.map((e) => (
                <tr style={{ textAlign: "center" }}>
                  <td>{e.prodId}</td>
                  {/* <td>{e.un}</td> */}
                  <td>
                    <img
                      src={e.imgLink}
                      alt={e.productname}
                      height="50"
                      width="50"
                    />
                  </td>
                  <td>{e.productname}</td>
                  <td>{e.amt}</td>
                  <td>{e.perQty}</td>
                  <td>{e.perQtyUnit}</td>
                  <td>{e.totQty}</td>
                  <td>{e.totQtyUnit}</td>
                  <td>
                    <button
                    className="upd-manage"
                      onClick={() => {
                        updateProds(
                          e.prodId,
                          e.productname,
                          e.description,
                          e.mobile,
                          e.amt,
                          e.perQty,
                          e.perQtyUnit,
                          e.totQty,
                          e.totQtyUnit,
                          e.imgLink
                        );
                      }}
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                    className="dlt-manage"
                      onClick={() => {
                        if (
                          window.confirm("Are you sure to delete this product?")
                        )
                          delProd(e.prodId);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
}
