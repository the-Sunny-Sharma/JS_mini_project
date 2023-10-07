import Navbar from '../components/Navbar';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function HostPr(){
    const rName=useRef();
    const navigate = useNavigate();
    useEffect(() => {
        let un = localStorage.getItem("un");
        if(un == null)
            navigate("/login");
        else
            setUn(un);
    },[]);
    const[un,setUn]=useState("");
    const[name,setName]=useState("");
    const[mail,setMail]=useState("");
    const[mob,setMob]=useState("");
    const[add,setAdd]=useState("");

    const hName=(event)=>{ setName(event.target.value); }
    const hMail=(event)=>{ setMail(event.target.value); }
    const hMob=(event)=>{ setMob(event.target.value); }
    const hAdd=(event)=>{ setAdd(event.target.value); }

    

    return(
        <>
            <Navbar />
            <h2>Hii, {un}</h2>
            <form>
                <input type="text" placeholder='Enter your Name' onChange={hName} value={name} ref={rName}/>
                <br/><br/>
                <input type="email" placeholder='Enter your Email' onChange={hMail} value={mail}/>
                <br/><br/>
                <input type="tel" placeholder='Enter your Mob. No.' pattern='[0-9]{10}'onChange={hMob} value={mob}/>
                <br/><br/>
                <input type="textarea" placeholder='Enter your Address' onChange={hAdd} value={add}/>
                <br/><br/>
                <input type='submit' value="Submit"/>
            </form>
        </>
    );
}

