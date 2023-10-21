import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbarv2 from '../components/Navbarv2';
import '../styles/profile.css';

export default function Profile(){
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
    let myDate = new Date();
    let hours= myDate.getHours();
    let greet;

    if (hours < 12)
        greet =  "Good Morning";
    else if (hours >= 12 && hours <= 17)
        greet = "Good Afternoon";
    else if (hours >= 17 && hours <= 24)
       greet = "Good Evening";
    return(
        <>
            <Navbarv2 />
            <div className='profile-wrapper'>
            <h3 className="heading-prof">Profile</h3>
            <p className='prof-greet'>{greet}, {un}</p>
            <Link to="/changepass"><button className='btn-change-pass'>
                Change Password</button></Link>
            </div>
            
        </>
    );
}