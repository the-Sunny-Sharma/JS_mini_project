import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import History from './pages/History';
import HostPr from './pages/HostPr';
import Setting from './pages/Setting';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Page404 from './pages/Page404';
import './styles/app.css';
import app from './components/Firebase';
import Logout from './pages/Logout';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/favorites' element={<Favorites />}/>
        <Route path='/history' element={<History />}/>
        <Route path='/yourproduct' element={<HostPr />}/>
        <Route path='/settings' element={<Setting />}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/logout' element={<Logout />} />
        <Route path='*' element={<Page404/>}/>
      </Routes>
      
    </BrowserRouter>
    </>
  );
}

export default App;
