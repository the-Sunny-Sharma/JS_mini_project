import '../styles/SignUp.css';
import  { useState, useRef, useEffect } from 'react';
import app from '../components/Firebase';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate,Link } from 'react-router-dom';
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
            <div className="main-div">
            
            <form onSubmit={save}>
                <div className="l-form">
                <h1 className='wel'>Welcome To Our Website!!</h1>
                    <div className="e-email">
                        <input className='txt-in' type='email' placeholder='Enter your email'
                        onChange={hEmail} value={email} ref={rEmail} />
                    </div>
                    <div className="pass">
                        <input className='txt-in' type='password' placeholder='Enter password'
                        onChange={hPw1} value={pw1} />
                    </div>
                    <div className="c-pass">
                        <input  className='txt-in' type='password' placeholder='Confirm password'
                        onChange={hPw2} value={pw2} />
                    </div>
                    <p className='instruct'>Already have an account? <Link to='/login' className='forgot-pass'> LogIn</Link> </p>
                    <div classname="loginbtn">
                        <input className='sign sign-btn' type='submit' value='Sign Up' />
                    </div>
                </div>
            
                
                </form>
            </div>
            
        </>
    );
}

