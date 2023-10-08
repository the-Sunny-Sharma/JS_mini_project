import { useState, useRef, useEffect } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/login.css";
import app from '../components/Firebase';

export default function Login() {
  const navigate = useNavigate();
  useEffect(() => {
    let un = localStorage.getItem("un");
    if (un != null) navigate("/");
  }, [navigate]);

  const rEmail = useRef();
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [ctg, setCtg] = useState("customer");

  const hEmail = (event) => {
    setEmail(event.target.value);
  };
  const hPw = (event) => {
    setPw(event.target.value);
  };
  const hCtg = (event) => {
    setCtg(event.target.value);
  };

  const check = (event) => {
    event.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, pw)
      .then((res) => {
        localStorage.setItem("un", email);
        localStorage.setItem("ctg", ctg);
        if (ctg === "customer") navigate("/");
        else if (ctg === "farmer") navigate("/dashboard");
      })
      .catch((err) => alert("issue " + err));
  };
  return (
    <>
      <Navbar />
      <div className="main-div-login">
        <div class="l-form--login">
          <h1 className="wel">Welcome Again!!</h1>
          <form onSubmit={check}>
            <input
              className="rad-cat"
              type="radio"
              name="ctg"
              value="customer"
              onChange={hCtg}
              checked={ctg === "customer"}
            />
            <label className="lbl">Customer</label>
            <input className="rad-cat" type="radio" name="ctg" value="farmer" onChange={hCtg} />
            <label className="lbl">Farmer</label>
            <div class="e-email">
              <input
                className="txt-in"
                type="email"
                placeholder="Enter your email"
                onChange={hEmail}
                value={email}
                ref={rEmail}
              />
            </div>
            <div className="pass">
              <input
                className="txt-in"
                type="password"
                placeholder="Enter the password"
                onChange={hPw}
                value={pw}
              />
            </div>
            <Link to="/forgotpass" className="forgot-pass">
              Forgot Password?
            </Link>

            <div className="loginbtn">
              <input
                className="txt-in btn-login"
                type="submit"
                value="Login"
              />
            </div>
            <p className="instruct">
              Don't have an account?
              <Link to="/signup" className="forgot-pass">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
