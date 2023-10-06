import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import Navbar from '../components/Navbar';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Forgotpass()
{
    const rMail=useRef();
    const [mail,setMail]=useState("");
    const hMail=(event)=>{ setMail(event.target.value); }

    const navigate = useNavigate();
    useEffect(() => {
        let un = localStorage.getItem("un");
        if(un != null)
            navigate("/login");
    },[]); 

    const forgotpass=(event)=>{
        event.preventDefault();
        const auth = getAuth();
        sendPasswordResetEmail(auth,mail)
        .then(res=>{
            navigate("/login");
        })
        .catch(err=>{ alert("Issue"+err)});
    }
    return(
        <>
        <Navbar/>
        <center>
            <h1>Forgot Password</h1>
            <br/>
            <form onSubmit={ forgotpass }>
                <input type="email" placeholder="Enter your Email" onChange={hMail} value={mail} ref={rMail}/>
                <br/><br/>
                <input type="submit" value="Submit"/>
            </form>
        </center>
        </>
    );
}