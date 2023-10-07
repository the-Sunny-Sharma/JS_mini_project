import '../styles/login.css';
import  { useState, useRef, useEffect } from 'react';
import app from '../components/Firebase';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Login() {

    const navigate = useNavigate();
    useEffect(() => {
        let un = localStorage.getItem("un");
        if(un != null)
        navigate('/');
    },[]);

    const rEmail = useRef();
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');


    const hEmail = (event) => {setEmail(event.target.value);}
    const hPw    = (event) => {setPw   (event.target.value);}

    const check = (event) => {
        event.preventDefault(); 
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, pw)
        .then(res => {
            localStorage.setItem("un",email);
            navigate('/');
        })
        .catch(err => alert ("issue "+err));
    }
    return(
        <>
            
            <Navbar />
            <div class="main-div">
                <div class="h1">
                    
                </div>
             <div class="l-form"> <form onSubmit={check}>
                <div class="e-email">
                    <input type='email' placeholder='Enter your email'
                    onChange={hEmail} value={email} ref={rEmail} />
                </div>
                <div class="pass">
                 <input type='password' placeholder='Enter the password'
                    onChange={hPw} value={pw} />
                </div>
                <Link to="/forgotpass">Forgot Password?</Link>
                <div class="loginbtn">
                    <input type='submit' value='Login' />
                </div>
                     </form>
             </div>
            </div>
        </>
    );
}
