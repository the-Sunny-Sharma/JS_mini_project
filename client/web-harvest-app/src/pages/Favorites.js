import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Favorites(){
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
            <h1 className="heading">Favorites</h1>
            <h2>Hii, {un}</h2>
        </>
    );
}