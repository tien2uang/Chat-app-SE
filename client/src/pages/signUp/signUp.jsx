import "./signUp.css";
import { useContext, useRef,useEffect,useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router";
import {SignUpFailure,SignUpStart,SignUpSuccess} from "../../context/AuthAction"


export default function SignUp() {

  const navigate = useNavigate();
  const userName=useRef();
  const name= useRef();
  const password=useRef();
  const checkedPassword=useRef(); 
  const [repeatPasswordCheck,setRepeatPasswordCheck]= useState(true);
  const {error,dispatch}=useContext(AuthContext);

  const handleSubmit=async (e)=>{ 
    e.preventDefault();
    const user = {
      username: userName.current.value,
      name: name.current.value,
      password: password.current.value,
      friends:[],
      avatarURL:""

    };

    if(password.current.value===checkedPassword.current.value){
      setRepeatPasswordCheck(true);
      dispatch(SignUpStart());
      try {
        const res= await axios.post("/auth/sign-up", user);
        console.log(res.data.status);
        if(res.data.status==='success sign up'){
          dispatch(SignUpSuccess());
          console.log("Đăng ksi thành công");
          navigate('/signIn');
        }
        else{ 
          dispatch(SignUpFailure("Đăng kí thất bại"));
        }

        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    else{
      setRepeatPasswordCheck(false);
    }
    
  }

  const handeFocus =()=>{
    setRepeatPasswordCheck(true);
    dispatch(SignUpStart());
    
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
            <input placeholder="Username" required className="signUpInput" ref={userName} onFocus={handeFocus} />
            <input
              placeholder="Name"
              required
              className="signUpInput"
              type="text"
              ref={name}
              onFocus={handeFocus}
            />
            <input
              placeholder="Password"
              required
              className="signUpInput"
              type="password"
              minLength="6"
              ref={password}
              onFocus={handeFocus}
            />
            <input
              placeholder="Password Again"
              required
              className="signUpInput"
              type="password"
              ref={checkedPassword}
              onFocus={handeFocus}
            />
            <h3 style={!repeatPasswordCheck ? {color: 'red'}: {display: 'none'}}>Please confirm your password</h3>
            <h3 style={error ? {color: 'red'}: {display: 'none'}}>Username already in use</h3>
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
