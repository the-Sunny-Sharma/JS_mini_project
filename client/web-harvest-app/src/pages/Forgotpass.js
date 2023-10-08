import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import Navbar from '../components/Navbar';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/forgotP.css';


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
    },[navigate]); 

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

        <div className='main-div-fp'>
            <div className='l-form-fp'>
            <h1 className='reset-head'>Reset Your Password</h1>
            <p className='instruct'>Enter the email address associated with your account and we'll send you a link to reset your password.</p>
            <form onSubmit={ forgotpass }>
                <input className='txt-in' type="email" placeholder="Enter your Email" onChange={hMail} value={mail} ref={rMail}/>
                <br/><br/>
                <input className="btn-login" type="submit" value="Continue"/>
            </form>
            </div>
        </div>
            
        </>
    );
}