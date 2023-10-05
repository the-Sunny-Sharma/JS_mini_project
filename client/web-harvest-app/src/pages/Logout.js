import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Logout(){
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
            <h1 className="heading">Are you sure you want to logout?</h1>
            <h2>{un}</h2>
            <button onClick={lo}>Yes</button>
            <Link to='/'>No, take me to the home page.</Link>
        </>
    );
}

