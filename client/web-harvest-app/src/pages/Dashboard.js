import Navbar from "../components/Navbar";
import "../styles/dashboard.css";

export default function Dashboard() {
  return (
    <>
      <div>
        <Navbar />
        <div className="main-dash">
          <h1>Dashboard</h1>
          <div className="d-card-container">
            <div className="card-dash">
              <div className="column-d row-grid">
                <div className="green-revenue dash-card">
                  <h3>Total revenue</h3>
                  <p> &#x20B9; 80,000</p>
                </div>
                <div className="blue-sale dash-card">
                  <h3>Today's sale</h3>
                  <p>&#x20B9; 80</p>
                </div>
                <div className="yellow-order dash-card">
                  <h3>New Orders</h3>
                  <p>16</p>
                </div>
                <div className="red-most-sold dash-card">
                  <h3>Most Sold Product</h3>
                  <p>Potato</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
