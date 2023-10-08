import Navbar from "../components/Navbar";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, updatePassword, onAuthStateChanged } from "firebase/auth";
import '../styles/changep.css';

export default function ChangePass() {
  const rPw1 = useRef();

  const [un, setUn] = useState("");
  const [pw1, setPw1] = useState("");
  const [pw2, setPw2] = useState("");
  const [msg, setMsg] = useState("");

  const hPw1 = (event) => {
    setPw1(event.target.value);
  };
  const hPw2 = (event) => {
    setPw2(event.target.value);
  };

  const navigate = useNavigate();
  useEffect(() => {
    let un = localStorage.getItem("un");
    if (un == null) navigate("/login");
    else setUn(un);
  }, [navigate]);

  const changepass = (event) => {
    event.preventDefault();
    if (pw1 === pw2) {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        updatePassword(user, pw1)
          .then((res) => {
            localStorage.clear();
            navigate("/login");
          })
          .catch((err) => alert("Issue" + err));
      });
    } else {
      setMsg("\u24D8 Password did not match");    }
  };

  return (
    <>
        <Navbar />
        <div className="main-div-cp">
          <div className="main-container-cp">
          <h3 className="greet-cp">Hii, {un}</h3>
            <form onSubmit={changepass} className="form-cp">
              <input
              className="txt-in-cp"
                type="password"
                placeholder="Enter New Password"
                onChange={hPw1}
                value={pw1}
                ref={rPw1}
              />
              <input
              className="txt-in-cp"
                type="password"
                placeholder="Confirm New Password"
                onChange={hPw2}
                value={pw2}
              />
              <p className="red-txt">{ msg }</p>
              <input className="cfm-btn" type="submit" value="Change" />
            </form>
          </div>
        </div>
    </>
  );
}