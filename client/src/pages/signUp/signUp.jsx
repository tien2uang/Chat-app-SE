import "./signUp.css";
import { useContext, useRef,useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";



export default function SignUp() {


  const userName=useRef();
  const name= useRef();
  const password=useRef();
  const checkedPassword=useRef(); 

  const handleSubmit=(e)=>{ 

  }
  return (
    <div className="signUp">
      <div className="wrapper">
        <div className="signUpLeft"></div>
        <div className="signUpRight">
          <div>
            <h1 className="title">Welcome to our chat app!</h1>
          </div>
          <div className="signUpRightWrapper">
          <form className="signUpBox">
            <input placeholder="Username" required className="signUpInput" ref={userName} />
            <input
              placeholder="Name"
              required
              className="signUpInput"
              type="text"
              ref={name}
            />
            <input
              placeholder="Password"
              required
              className="signUpInput"
              type="password"
              minLength="6"
              ref={password}
            />
            <input
              placeholder="Password Again"
              required
              className="signUpInput"
              type="password"
              ref={checkedPassword}
            />
            <button className="signUpButton" type="submit" onClick={handleSubmit}>
              Sign Up
            </button>
            <span className="hadAccount">You had an account ?</span>
            <button className="signUpRegisterButton" onClick={() => {window.location.href = "http://localhost:3000/signIn"}}>
                Sign In
            </button>
          </form>
          </div>
          
        </div>
      </div>
    </div>
  );
}
