import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Setting(){
    const navigate = useNavigate();
    useEffect(() => {
        let un = localStorage.getItem("un");
        if(un == null)
            navigate("/login");
        else
            setUn(un);
    },[]);

    const [un, setUn] = useState('');
    const lo = (event) => {
        event.preventDefault();
        localStorage.clear();
        navigate("/login");
    }
    return(
        <>
            <Navbar />
            <h1 className="heading">Setting Page</h1>
            <h2>Hii, {un}</h2>
        </>
    );
}