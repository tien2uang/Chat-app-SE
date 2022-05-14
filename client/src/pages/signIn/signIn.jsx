import "./signIn.css";
import { loginCall } from "../../loginCall";
import { useContext, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
export default function SignIn() {

  const username= useRef();
  const password= useRef();

  const {dispatch} =useContext(AuthContext);
  const handleSubmit = (e)=>{
    e.preventDefault();
    const userCredentials= {username:username.current.value,password:password.current.value};
    console.log(userCredentials);
    loginCall(userCredentials,dispatch);
    console.log("click");
  };


  return (
    <div className="signIn">
      <div className="signInWrapper">
        <div className="signInLeft"></div>
        <div className="signInRight">
          <div>
            <h1 className="title">Welcome to our chat app</h1>
          </div>
          <div className="signInRightWrapper">
            <form className="signInBox">
              <input placeholder="Username" required className="signInInput" ref={username} />
              <input
                placeholder="Password"
                type="password"
                required
                className="signInInput"
                ref={password}
              />
              <button className="signInButton" type="submit" onClick={handleSubmit}>
                Sign In
              </button>
              <span className="signInForgot">Don't have an account?</span>
              <button className="signInRegisterButton" onClick={() => {window.location.href = "http://localhost:3000/signUp"}}>
                Create a new account
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
