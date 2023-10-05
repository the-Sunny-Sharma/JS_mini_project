import '../styles/login.css';
import  { useState, useRef, useEffect } from 'react';
import app from '../components/Firebase';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function SignUp() {

    const navigate = useNavigate();
    useEffect(() => {
        let un = localStorage.getItem("un");
        if(un != null)
        navigate('/');
    },[]);

    const rEmail = useRef();
    const [email, setEmail] = useState('');
    const [pw1, setPw1] = useState('');
    const [pw2, setPw2] = useState('');
    const [msg, setMsg] = useState('');

    const hEmail = (event) => {setEmail(event.target.value);}
    const hPw1    = (event) => {setPw1(event.target.value);}
    const hPw2    = (event) => {setPw2(event.target.value);}


    const save = (event) => {
        event.preventDefault(); 
        if(pw1 == pw2){
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, email,pw1)
            .then(res => navigate("/login"))
            .catch(err => setMsg("issue " + err));
        }
        else {
            setMsg("Password did not match");
        }
    }
    return(
        <>
        <Navbar />
            <h1>SignUp Page</h1>
            <form onSubmit={save}>
                <input type='email' placeholder='Enter your email'
                onChange={hEmail} value={email} ref={rEmail} />
                <input type='password' placeholder='Enter password'
                onChange={hPw1} value={pw1} />
                <input type='password' placeholder='Confirm password'
                onChange={hPw2} value={pw2} />
                <input type='submit' value='Sign Up' />
            </form>
            <h1>{msg}</h1>
        </>
    );
}

