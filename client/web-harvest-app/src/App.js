import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import History from './pages/History';
import HostPr from './pages/HostPr';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Page404 from './pages/Page404';
import ChangePass from './pages/ChangePass';
import './styles/app.css';
import Logout from './pages/Logout';
import Forgotpass from './pages/Forgotpass';
import Products from './pages/Products';
import Dashboard from './pages/Dashboard';
import ManageProduct from './pages/ManageProduct';
import UpdateProd from './pages/UpdateProd';
import Profile from './pages/Profile';
import AddToCart from './pages/AddToCart';
import Checkout from './pages/Checkout';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/history' element={<History />}/>
        <Route path='/yourproduct' element={<HostPr />}/>
        <Route path='/manageprod' element={<ManageProduct />} />
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/logout' element={<Logout />} />
        <Route path='/changepass' element={<ChangePass />} />
        <Route path='/forgotpass' element={<Forgotpass />} />
        <Route path='/products' element={<Products />} />
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/updateprod' element={<UpdateProd />} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/cart' element={<AddToCart />} />
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/productpage' element={<ProductPage/>} />
        <Route path='*' element={<Page404/>}/>
      </Routes>
      
    </BrowserRouter>
    </>
  );
}

export default App;
