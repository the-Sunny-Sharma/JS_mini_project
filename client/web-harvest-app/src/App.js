import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import History from './pages/History';
import HostPr from './pages/HostPr';
import Setting from './pages/Setting';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Page404 from './pages/Page404';
import ChangePass from './pages/ChangePass';
import './styles/app.css';
import app from './components/Firebase';
import Logout from './pages/Logout';
import CardDisplay from './pages/CardDisplay';
import Forgotpass from './pages/Forgotpass';
import Products from './pages/Products';
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/history' element={<History />}/>
        <Route path='/yourproduct' element={<HostPr />}/>
        <Route path='/settings' element={<Setting />}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/logout' element={<Logout />} />
        <Route path='/carddisplay' element={<CardDisplay />} />
        <Route path='/changepass' element={<ChangePass />} />
        <Route path='/forgotpass' element={<Forgotpass />} />
        <Route path='/products' element={<Products />} />
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='*' element={<Page404/>}/>
      </Routes>
      
    </BrowserRouter>
    </>
  );
}

export default App;
