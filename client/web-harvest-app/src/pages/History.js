import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

export default function History(){
    const navigate = useNavigate();
    useEffect(() => {
        let un = localStorage.getItem("un");
        if(un == null)
            navigate("/login");
        else
            setUn(un);
    },[]);

    const [un, setUn] = useState('');
    
    return(
        <>
            <Navbar />
            <h1 className="heading">History</h1>
            <h2>Hii, {un}</h2>
            <Footer/>
        </>
    );
}