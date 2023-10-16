import Navbar from "../components/Navbar";
import "../styles/ManageProduct.css"
export default function ManageProduct(){
    return (
        <>
        
            <Navbar />
    
        <div className="main-manage">
            <div className="h1">
            <h1>Manage Your Products from here.</h1>
            </div>
            <table border='5' className="main-table" style={{"width":"50%"}}>
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
          
            <tr style={{ textAlign: "center" }} >
              <td>1</td>
              <td>Potato</td>
              <td>20</td>
              <td>500</td>
              <td>gm</td>
              <td>5</td>
              <td>kg</td>
              <td><button >Update</button></td>
              <td>
                <button >Delete</button>
              </td>
              
            </tr>
            <tr style={{ textAlign: "center" }} >
              <td>2</td>
              <td>Tomato</td>
              <td>30</td>
              <td>1</td>
              <td>Kg</td>
              <td>25</td>
              <td>kg</td>
              <td><button >Update</button></td>
              <td>
                <button >Delete</button>
              </td>
              
            </tr>
            <tr style={{ textAlign: "center" }} >
              <td>3</td>
              <td>Spinach</td>
              <td>15</td>
              <td>500</td>
              <td>gm</td>
              <td>15</td>
              <td>kg</td>
              <td><button >Update</button></td>
              <td>
                <button >Delete</button>
              </td>
              
            </tr>
            </tbody>
            </table>
        </div>  
        
        </>
    );
}