import Navbar from '../components/Navbar';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth,updatePassword,onAuthStateChanged } from 'firebase/auth';

export default function ChangePass(){
    const rPw1=useRef();

    const [un, setUn] = useState("");
    const [pw1,setPw1]=useState("");
    const [pw2,setPw2]=useState("");
    
    const hPw1=(event)=>{ setPw1(event.target.value); }
    const hPw2=(event)=>{ setPw2(event.target.value); }

    const navigate = useNavigate();
    useEffect(() => {
        let un = localStorage.getItem("un");
        if(un == null)
            navigate("/login");
        else
            setUn(un);
    },[]); 
    
    const changepass=(event)=>{
        event.preventDefault();
        if (pw1===pw2)
        {
            const auth=getAuth();
            onAuthStateChanged(auth,(user)=>{
                updatePassword(user,pw1)
                .then(res=>{
                    localStorage.clear();
                    navigate("/login");
                })
                .catch(err=>alert("Issue"+err));
            });
        }
        else
        {
            alert("Invalid Credentials!!");
        }
    }
    
    return(
        <>
        <center>
        <Navbar/>
        <div clas="main-div">
            <div className="h1">
                <h1 >Hii { un }</h1>
            </div>
            <br/>
            <div className="main-f">
                <form onSubmit={ changepass }>
                    <input type="password" placeholder="Enter New Password" onChange={hPw1} value={pw1} ref={rPw1}/>
                    <br/><br/>
                    <input type="password" placeholder="Confirm New Password" onChange={hPw2} value={pw2}/>
                    <br/><br/>
                    <input type="submit" value="Change"/>
                </form>
            </div>
        </div>
        </center>
        
        </>
    );
}